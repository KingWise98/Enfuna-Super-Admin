"use client"

import { createContext, useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { api } from '../lib/api';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 const [authTokens, setAuthTokens] = useState(() => JSON.parse(localStorage.getItem('authtokens')) || null);
 const [user, setUser] = useState(() => (authTokens ? jwtDecode(authTokens.access) : null));
  const location = useLocation();
  
  // User roles state
  const [isStaff, setIsStaff] = useState(false);
  const [isDriver, setIsDriver] = useState(false);
  const [isRider, setIsRider] = useState(false);
  const [isVendor, setIsVendor] = useState(false);
  const [isBusiness, setIsBusiness] = useState(false);
  const [isSuperUser, setIsSuperUser] = useState(false);
  
  // Role detection state
  const [roleDetectionError, setRoleDetectionError] = useState('');
  
  const [loading, setLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [noAccount, setNoAccount] = useState('');
  
  const navigate = useNavigate();

  // Enhanced debug function
  const debugToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      console.log('🔍 Token Debug:', decoded);
      console.log('🔍 Token Keys:', Object.keys(decoded));
      
      // Check if token has role information
      const hasRoleInfo = Object.keys(decoded).some(key => 
        key.includes('role') || 
        key.includes('staff') || 
        key.includes('driver') ||
        key.includes('rider') ||
        key.includes('vendor') ||
        key.includes('business') ||
        key.includes('superuser') ||
        key.includes('admin')
      );
      
      if (!hasRoleInfo) {
        console.warn('⚠️ Token does not contain role information');
        setRoleDetectionError('Token does not contain user role information');
      }
      
      return decoded;
    } catch (error) {
      console.error('Token decode error:', error);
      setRoleDetectionError('Failed to decode authentication token');
      return null;
    }
  };

  // Registration function - EXACT endpoint without trailing slash
  const registerUser = async (userData) => {
    try {
      
      // Using auth/register endpoint (no trailing slash)
      const response = await api.post('api/auth/register', userData);
      
      if (response.status === 200 || response.status === 201) {
          return { 
            success: true, 
            data: response.data,
            message: 'Registration successful. Please verify OTP.' 
          };
      }
    } catch (error) {
      console.error('Registration error:', error);
      
      let errorMessage = 'Registration failed. Please try again.';
      
      if (error.response) {
        if (error.response.data.detail) {
          errorMessage = error.response.data.detail;
        } else if (error.response.data.non_field_errors) {
          errorMessage = error.response.data.non_field_errors[0];
        } else if (error.response.data.phone_number) {
          errorMessage = `Phone number error: ${error.response.data.phone_number[0]}`;
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        }
      } else if (error.request) {
        errorMessage = 'Network error. Please check your connection.';
      }
      
      return { success: false, error: errorMessage };
    }
  };

  // Verify OTP function - Assuming endpoint is /api/auth/verify-otp (no trailing slash)
  const verifyOTP = async (phone, otp, token = null) => {
    try { 
      const data = { phone_number: phone, otp }; 
      // Using auth/verify-otp endpoint (no trailing slash)
      const response = await api.post('api/auth/verify_token', data);
      
      if (response.status === 200) {
        navigate('/login')
        return { 
          success: true, 
          data: response.data.detail,
        };
      }
      
    } catch (error) {
      console.error('OTP verification error:', error);
      
      let errorMessage = 'OTP verification failed.';
      
      if (error.response) {
        if (error.response.data.detail) {
          errorMessage = error.response.data.detail;
        } else if (error.response.data.otp) {
          errorMessage = `OTP error: ${error.response.data.otp[0]}`;
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        }
      }
      
      return { success: false, error: errorMessage };
    }
  };

  // Enhanced login function with role validation - EXACT endpoint without trailing slash
  const loginUser = async (username, password) => {
    setLoginLoading(true);
    setNoAccount('');
    setRoleDetectionError('');
    
    try {
      console.log('🔍 Attempting login for:', username);
      
      // Using auth/login endpoint (no trailing slash)
      const tokenResponse = await api.post('api/auth/login', {
        username,
        password
      });
      
      const tokens = tokenResponse.data;
      console.log('tokens', tokens)
      
      if (tokenResponse.status === 200 && tokens.access) {
        console.log('🔍 Login successful, tokens received');
        
        const decodedUser = debugToken(tokens.access);
        
        localStorage.setItem('authtokens', JSON.stringify(tokens));
        setAuthTokens(tokens);
        setUser(decodedUser);

        {decodedUser.is_rider && navigate('/rider/dashboards')}
               
        showSuccessAlert('Login successful!');
    
        setLoginLoading(false);
        return { 
          success: true, 
          user: decodedUser, 
          tokens, 
        };
      }
    } catch (error) {
      setLoginLoading(false);
      
      let errorMessage = 'Login failed. Please check your credentials.';
      
      if (error.response) {
        if (error.response.data.detail) {
          errorMessage = error.response.data.detail;
          setNoAccount(error.response.data.detail);
        } else if (error.response.data.non_field_errors) {
          errorMessage = error.response.data.non_field_errors[0];
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        }
      } else if (error.request) {
        errorMessage = 'Network error. Please check your connection.';
      }
      
      showErrorAlert(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  // Alert functions
  const showSuccessAlert = (message) => {
    Swal.fire({
      title: message,
      icon: 'success',
      timer: 3000,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      background: '#f0fdf4',
      iconColor: '#10b981',
    });
  };

  const showErrorAlert = (message) => {
    Swal.fire({
      title: message,
      text: message,
      icon: 'error',
      timer: 5000,
      confirmButtonText: 'OK',
      background: '#fef2f2',
      iconColor: '#ef4444',
    });
  };

useEffect(() => {
  if (authTokens) {
    const decodedUser = jwtDecode(authTokens.access);
    const lastPath = localStorage.getItem('lastPath');

    setUser(decodedUser);

    if (lastPath) {
      navigate(lastPath);  
      localStorage.removeItem('lastPath');
    }
  }

  setLoading(false);
}, [authTokens]);

  const contextData = {
    // User data
    user,
    setUser,
    
    // Tokens
    authTokens,
    setAuthTokens,
    
    // User roles
    isStaff,
    isDriver,
    isRider,
    isVendor,
    isBusiness,
    isSuperUser,
    
    // Role detection
    roleDetectionError,
    
    // Loading states
    loginLoading,
    noAccount,
    loading,
    
    // Auth status
    isAuthenticated: !!authTokens,
    
    // Auth functions
    loginUser,
    registerUser,
    verifyOTP,
    
    
    // Role functions
    refreshUserRoles: () => {
      if (user) {
        // updateUserRoles(user);
      }
    },

    
    // Alert functions
    showSuccessAlert,
    showErrorAlert,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading authentication...</p>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};