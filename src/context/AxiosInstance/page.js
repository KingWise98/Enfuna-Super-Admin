import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import axios from 'axios';
import dayjs from 'dayjs';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';

const baseURL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

const useAxios = () => {
  const { setUser, authTokens, setAuthTokens } = useContext(AuthContext);

  // Create an Axios instance with the base URL and authorization header
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Add Authorization header if tokens exist
  if (authTokens?.access) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${authTokens.access}`;
  }

  // Intercepting requests to check and refresh authentication tokens
  axiosInstance.interceptors.request.use(async (req) => {
    // Check if we have access token
    if (!authTokens?.access) {
      return req;
    }

    // Decode the access token to check its expiration
    const user = jwtDecode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    // If the access token is not expired, proceed with the request
    if (!isExpired) {
      req.headers.Authorization = `Bearer ${authTokens.access}`;
      return req;
    }

    try {
      // FIXED: Using correct refresh endpoint
      const response = await axios.post(`${baseURL}/api/auth/refresh/`, {
        refresh: authTokens.refresh,
      });

      // Update local storage with the new tokens
      localStorage.setItem("authtokens", JSON.stringify(response.data));
      setAuthTokens(response.data);
      
      const newUser = jwtDecode(response.data.access);
      setUser(newUser);

      // Update the request header with the new access token
      req.headers.Authorization = `Bearer ${response.data.access}`;
      return req;
    } catch (error) {
      console.log("Error refreshing token:", error);
      
      // Clear auth state
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem('authtokens');
      
      // Show session expired message
      Swal.fire({
        icon: 'warning',
        title: 'Session Expired',
        text: 'Your session has expired. Please log in again.',
        timer: 3000,
        showConfirmButton: true,
        confirmButtonText: 'OK'
      });
      
      // Redirect to login page
      window.location.href = '/login';
      
      return Promise.reject(error);
    }
  });

  // Add response interceptor for handling common errors
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      // Handle 401 Unauthorized errors
      if (error.response?.status === 401) {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authtokens');
        
        Swal.fire({
          icon: 'error',
          title: 'Unauthorized',
          text: 'Please log in to continue.',
          confirmButtonText: 'OK'
        });
        
        window.location.href = '/login';
      }
      
      // Handle 403 Forbidden errors (role/permission issues)
      if (error.response?.status === 403) {
        Swal.fire({
          icon: 'warning',
          title: 'Access Denied',
          text: 'You do not have permission to access this resource.',
          confirmButtonText: 'OK'
        });
      }
      
      // Handle 404 Not Found errors
      if (error.response?.status === 404) {
        console.warn('API endpoint not found:', error.config.url);
        
      }
      
      // Handle other errors
      if (error.response?.status >= 500) {
        Swal.fire({
          icon: 'error',
          title: 'Server Error',
          text: 'Something went wrong. Please try again later.',
          confirmButtonText: 'OK'
        });
      }
      
      // Handle network errors
      if (!error.response) {
        Swal.fire({
          icon: 'error',
          title: 'Network Error',
          text: 'Unable to connect to the server. Please check your internet connection.',
          confirmButtonText: 'OK'
        });
      }
      
      return Promise.reject(error);
    }
  );

  // Returning the Axios instance with interceptors
  return axiosInstance;
};

export default useAxios;