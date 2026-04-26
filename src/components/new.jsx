"use client";

import { useState, useEffect, useContext, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// Material-UI imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { styled, alpha } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Fab from '@mui/material/Fab';
import useScrollTrigger from '@mui/material/useScrollTrigger';

// MUI Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import RefreshIcon from '@mui/icons-material/Refresh';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BlockIcon from '@mui/icons-material/Block';
import CheckIcon from '@mui/icons-material/Check';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarIcon from '@mui/icons-material/Star';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import BuildIcon from '@mui/icons-material/Build';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FlagIcon from '@mui/icons-material/Flag';
import ChurchIcon from '@mui/icons-material/Church';
import StarsIcon from '@mui/icons-material/Stars';
import ContactsIcon from '@mui/icons-material/Contacts';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ShareIcon from '@mui/icons-material/Share';
import PaidIcon from '@mui/icons-material/Paid';
import InsightsIcon from '@mui/icons-material/Insights';
import ErrorIcon from '@mui/icons-material/Error';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import ScheduleIcon from '@mui/icons-material/Schedule';
import FolderIcon from '@mui/icons-material/Folder';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// Imported Context and Axios
import useAxios from '../context/AxiosInstance/page';
import { AuthContext } from '../context/AuthContext';

// PDF Library
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

// ==================== UGANDA PUBLIC HOLIDAYS ====================
const UGANDA_HOLIDAYS = [
  { month: 1, day: 1, name: "New Year's Day", icon: StarsIcon, color: '#FFD700' },
  { month: 1, day: 26, name: "NRM Liberation Day", icon: FlagIcon, color: '#FF0000' },
  { month: 2, day: 16, name: "Archbishop Janani Luwum Day", icon: ChurchIcon, color: '#800080' },
  { month: 3, day: 8, name: "Women's Day", icon: CelebrationIcon, color: '#FF69B4' },
  { month: 5, day: 1, name: "Labour Day", icon: CelebrationIcon, color: '#FF4500' },
  { month: 6, day: 3, name: "Martyrs' Day", icon: ChurchIcon, color: '#8B0000' },
  { month: 6, day: 9, name: "National Heroes' Day", icon: FlagIcon, color: '#FFD700' },
  { month: 10, day: 9, name: "Independence Day", icon: FlagIcon, color: '#000000' },
  { month: 12, day: 25, name: "Christmas Day", icon: StarsIcon, color: '#FF0000' },
  { month: 12, day: 26, name: "Boxing Day", icon: CelebrationIcon, color: '#FFD700' },
];

// ==================== ENHANCED STYLED COMPONENTS ====================
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 20,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0, 37, 221, 0.15)',
  },
}));

const StatCard = styled(Card)(({ theme, bgcolor }) => ({
  borderRadius: 20,
  background: bgcolor || 'white',
  color: bgcolor ? 'white' : 'inherit',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
  },
  '&::before': bgcolor ? {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'rgba(255,255,255,0.3)',
  } : {},
}));

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 280,
  backgroundColor: '#FFFFFF',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  borderRight: '1px solid rgba(0, 0, 0, 0.08)',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '"Inter", "Poppins", sans-serif',
  overflowY: 'auto',
  zIndex: 1100,
  [theme.breakpoints.down('md')]: {
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s ease',
    '&.open': {
      transform: 'translateX(0)',
    },
  },
}));

const MainContent = styled(Box)(({ theme }) => ({
  marginLeft: 280,
  minHeight: '100vh',
  backgroundColor: '#F8FAFC',
  fontFamily: '"Inter", "Poppins", sans-serif',
  transition: 'margin-left 0.3s ease',
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
  },
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: 24,
    overflow: 'hidden',
    maxWidth: '900px',
    width: '100%',
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      borderRadius: 0,
      height: '100%',
      maxHeight: '100%',
    },
  },
}));

const DialogHeader = styled(Box)(({ theme, bgcolor }) => ({
  background: bgcolor || 'linear-gradient(135deg, #0025DD 0%, #2D4BFF 100%)',
  color: 'white',
  padding: theme.spacing(3),
  position: 'relative',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 12,
  fontWeight: 600,
  textTransform: 'none',
  padding: '10px 24px',
  transition: 'all 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
}));

const StatusChip = styled(Chip)(({ status, theme }) => {
  let backgroundColor, color, borderColor;
  
  switch(status?.toLowerCase()) {
    case 'success':
    case 'completed':
    case 'resolved':
    case 'valid':
    case 'active':
      backgroundColor = alpha(theme.palette.success.main, 0.1);
      color = theme.palette.success.dark;
      break;
    case 'pending':
      backgroundColor = alpha(theme.palette.warning.main, 0.1);
      color = theme.palette.warning.dark;
      break;
    case 'failed':
    case 'invalid':
    case 'inactive':
    case 'cancelled':
    case 'suspended':
      backgroundColor = alpha(theme.palette.error.main, 0.1);
      color = theme.palette.error.dark;
      break;
    default:
      backgroundColor = alpha(theme.palette.grey[500], 0.1);
      color = theme.palette.grey[700];
  }
  
  return {
    backgroundColor,
    color,
    fontWeight: 600,
    fontSize: '0.75rem',
    height: 26,
    borderRadius: '8px',
  };
});

const SearchBar = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    transition: 'all 0.2s ease',
    '&:hover': {
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    },
    '&.Mui-focused': {
      boxShadow: '0 0 0 2px rgba(0, 37, 221, 0.1)',
    },
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: 12,
  padding: '8px 16px',
  fontWeight: 600,
  textTransform: 'none',
  gap: 8,
}));

// ==================== GREETING FUNCTION ====================
const getDynamicGreeting = () => {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  
  const holiday = UGANDA_HOLIDAYS.find(h => h.month === month && h.day === day);
  
  if (holiday) {
    return {
      text: holiday.name,
      icon: holiday.icon,
      color: holiday.color || '#0025DD',
      isHoliday: true
    };
  }
  
  if (hour >= 5 && hour < 12) return { text: "Good Morning", icon: WbSunnyIcon, color: '#F59E0B' };
  if (hour >= 12 && hour < 17) return { text: "Good Afternoon", icon: WbSunnyIcon, color: '#F59E0B' };
  if (hour >= 17 && hour < 21) return { text: "Good Evening", icon: NightsStayIcon, color: '#6366F1' };
  return { text: "Good Night", icon: NightsStayIcon, color: '#4B5563' };
};

// ==================== SCROLL TO TOP BUTTON ====================
function ScrollToTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        <Fab
          size="small"
          aria-label="scroll back to top"
          sx={{
            bgcolor: '#0025DD',
            color: 'white',
            '&:hover': { bgcolor: '#001DB0' },
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      </Box>
    </Fade>
  );
}

// ==================== DETAILS MODAL ====================
const DetailsModal = ({ open, onClose, title, data, type }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!data) return null;

  const DetailRow = ({ label, value, highlight }) => (
    <Box sx={{ mb: 2 }}>
      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem', fontWeight: 500 }}>
        {label}
      </Typography>
      <Typography 
        variant="body2" 
        fontWeight={highlight ? "bold" : 500}
        sx={{ 
          color: highlight ? '#0025DD' : 'inherit',
          wordBreak: 'break-word',
        }}
      >
        {value || 'N/A'}
      </Typography>
    </Box>
  );

  const renderTripDetails = () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Trip ID" value={data.id?.slice(0, 12)} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Date" value={new Date(data.created_at).toLocaleString()} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Rider" value={data.rider_name} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Customer" value={data.customer_name || 'Guest'} />
      </Grid>
      <Grid item xs={12}>
        <DetailRow label="Route" value={`${data.pickup_location} → ${data.destination}`} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Amount" value={`UGX ${data.trip_fare?.toLocaleString()}`} highlight />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Payment Method" value={<Chip label={data.payment_method} size="small" />} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Status" value={<StatusChip status={data.status} label={data.status} />} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Duration" value={data.duration} />
      </Grid>
    </Grid>
  );

  const renderExpenseDetails = () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Expense ID" value={data.id?.slice(0, 12)} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Date" value={new Date(data.created_at).toLocaleString()} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Rider" value={data.rider_name} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Category" value={<Chip label={data.category} size="small" />} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Amount" value={`UGX ${data.amount?.toLocaleString()}`} highlight />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Expense Type" value={data.expense_type} />
      </Grid>
      {data.receipt && (
        <Grid item xs={12}>
          <ActionButton variant="outlined" startIcon={<ReceiptIcon />} size="small">
            View Receipt
          </ActionButton>
        </Grid>
      )}
    </Grid>
  );

  const renderDeliveryDetails = () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Delivery ID" value={data.id?.slice(0, 12)} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Date" value={new Date(data.created_at).toLocaleString()} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Rider" value={data.rider_name} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Package Type" value={data.package_type} />
      </Grid>
      <Grid item xs={12}>
        <DetailRow label="Route" value={`${data.pickup_location} → ${data.drop_off_location}`} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Delivery Fee" value={`UGX ${data.delivery_fee?.toLocaleString()}`} highlight />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Payment Method" value={<Chip label={data.payment_method} size="small" />} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Status" value={<StatusChip status={data.status} label={data.status} />} />
      </Grid>
    </Grid>
  );

  const renderGroupDetails = () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Group ID" value={data.id?.slice(0, 12)} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Created" value={new Date(data.created_at).toLocaleDateString()} />
      </Grid>
      <Grid item xs={12}>
        <DetailRow label="Group Name" value={data.name} highlight />
      </Grid>
      <Grid item xs={12}>
        <DetailRow label="Description" value={data.description || 'No description'} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Group Type" value={<Chip label={data.group_type} size="small" />} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Members" value={`${data.member_count || 0} / ${data.max_members}`} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Contribution" value={`UGX ${data.contrib_amount?.toLocaleString()}`} highlight />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Frequency" value={data.contrib_frequency} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Total Pool" value={`UGX ${data.total_pool?.toLocaleString() || '0'}`} highlight />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Status" value={<Chip label={data.is_public ? 'Public' : 'Private'} size="small" />} />
      </Grid>
    </Grid>
  );

  const renderWalletDetails = () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Wallet ID" value={data.id?.slice(0, 12)} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Rider" value={data.rider_name} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Balance" value={`UGX ${data.balance?.toLocaleString() || '0'}`} highlight />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Available" value={`UGX ${data.available_balance?.toLocaleString() || '0'}`} highlight />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Reserved" value={`UGX ${data.reserved_balance?.toLocaleString() || '0'}`} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Currency" value={data.currency || 'UGX'} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Status" value={<StatusChip status={data.is_active ? 'active' : 'inactive'} label={data.is_active ? 'Active' : 'Inactive'} />} />
      </Grid>
    </Grid>
  );

  const renderContactDetails = () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Contact ID" value={data.id?.slice(0, 12)} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Type" value={<Chip label={data.type} size="small" />} />
      </Grid>
      <Grid item xs={12}>
        <DetailRow label="Full Name" value={data.full_name} highlight />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Phone" value={data.phone} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Email" value={data.email} />
      </Grid>
      <Grid item xs={12}>
        <DetailRow label="Business Name" value={data.bussiness_name} />
      </Grid>
      <Grid item xs={12}>
        <DetailRow label="Location" value={data.location} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Loyalty Points" value={data.loyalty_points || 0} highlight />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Status" value={<StatusChip status={data.status} label={data.status} />} />
      </Grid>
    </Grid>
  );

  const renderAgentDetails = () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Agent ID" value={data.id?.slice(0, 12)} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Rider" value={data.rider_name} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Referral Code" value={data.referral_code} highlight />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Status" value={<StatusChip status={data.is_active ? 'active' : 'inactive'} label={data.is_active ? 'Active' : 'Inactive'} />} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Total Referrals" value={data.total_referrals || 0} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Total Commission" value={`UGX ${data.total_commission?.toLocaleString() || '0'}`} highlight />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailRow label="Created" value={new Date(data.created_at).toLocaleDateString()} />
      </Grid>
    </Grid>
  );

  return (
    <StyledDialog open={open} onClose={onClose} fullScreen={isMobile} TransitionComponent={Slide}>
      <DialogHeader bgcolor="#0025DD">
        <IconButton onClick={onClose} sx={{ position: 'absolute', right: 16, top: 16, color: 'white' }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" fontWeight="bold">{title}</Typography>
      </DialogHeader>
      <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
        {type === 'trip' && renderTripDetails()}
        {type === 'expense' && renderExpenseDetails()}
        {type === 'delivery' && renderDeliveryDetails()}
        {type === 'group' && renderGroupDetails()}
        {type === 'wallet' && renderWalletDetails()}
        {type === 'contact' && renderContactDetails()}
        {type === 'agent' && renderAgentDetails()}
      </DialogContent>
      <DialogActions sx={{ p: { xs: 2, sm: 3 }, borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <Button onClick={onClose} variant="contained" sx={{ bgcolor: '#0025DD', borderRadius: 2 }}>
          Close
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

// ==================== MAIN COMPONENT ====================
const SuperAdminDashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const navigate = useNavigate();
  
  const { user } = useContext(AuthContext);
  const AxiosInstance = useAxios();
  
  // State
  const [activeTab, setActiveTab] = useState(0);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  
  // Data States
  const [dashboardStats, setDashboardStats] = useState({
    totalRiders: 0,
    activeRiders: 0,
    totalTrips: 0,
    totalDeliveries: 0,
    totalRevenue: 0,
    todayRevenue: 0,
    platformFees: 0,
    totalExpenses: 0,
    totalGroups: 0,
    activeGroups: 0,
    groupPool: 0,
    totalWallets: 0,
    totalWalletBalance: 0,
    totalContacts: 0,
    activeContacts: 0,
    totalAgents: 0,
    activeAgents: 0,
    totalAgentCommissions: 0
  });
  
  const [riders, setRiders] = useState([]);
  const [trips, setTrips] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [deliveries, setDeliveries] = useState([]);
  const [groups, setGroups] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);
  const [wallets, setWallets] = useState([]);
  const [walletTransactions, setWalletTransactions] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [agents, setAgents] = useState([]);
  const [agentStats, setAgentStats] = useState({
    todayOnboardedUsers: 0,
    activeToday: 0,
    teamTrips: 0,
    todayDeliveries: 0,
    totalCommission: 0
  });
  
  // Modal States
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState('');
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  
  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  // Contact Dialog States
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);
  const [contactEditMode, setContactEditMode] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);
  const [contactValidationErrors, setContactValidationErrors] = useState({});
  
  // Profile View State
  const [selectedRiderProfile, setSelectedRiderProfile] = useState(null);
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  
  // Snackbar
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const greeting = getDynamicGreeting();

  // ============ FETCH ALL DATA ============
  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [
        statsRes, 
        ridersRes, 
        tripsRes, 
        expensesRes,
        deliveriesRes,
        groupsRes,
        withdrawalsRes,
        walletsRes,
        walletTxRes,
        contactsRes,
        agentsRes,
        agentStatsRes
      ] = await Promise.all([
        AxiosInstance.get('/api/admin/dashboard/stats'),
        AxiosInstance.get('/api/admin/riders/list'),
        AxiosInstance.get('/api/admin/trips/all'),
        AxiosInstance.get('/api/admin/expenses/all'),
        AxiosInstance.get('/api/admin/deliveries/all'),
        AxiosInstance.get('/api/admin/groups/all'),
        AxiosInstance.get('/api/admin/withdrawals/pending'),
        AxiosInstance.get('/api/admin/wallets/all'),
        AxiosInstance.get('/api/admin/wallet-transactions/all'),
        AxiosInstance.get('/api/admin/contacts/all'),
        AxiosInstance.get('/api/admin/agents/all'),
        AxiosInstance.get('/api/admin/agents/stats')
      ]);
      
      const walletData = walletsRes.data || [];
      const contactData = contactsRes.data || [];
      const agentData = agentsRes.data || [];
      const agentStatsData = agentStatsRes.data || {};
      
      setDashboardStats({
        ...statsRes.data,
        totalWallets: walletData.length,
        totalWalletBalance: walletData.reduce((sum, w) => sum + (parseFloat(w.balance) || 0), 0),
        totalContacts: contactData.length,
        activeContacts: contactData.filter(c => c.status === 'active').length,
        totalAgents: agentData.length,
        activeAgents: agentData.filter(a => a.is_active).length,
        totalAgentCommissions: agentData.reduce((sum, a) => sum + (parseFloat(a.total_commission) || 0), 0)
      });
      
      setRiders(ridersRes.data);
      setTrips(tripsRes.data);
      setExpenses(expensesRes.data);
      setDeliveries(deliveriesRes.data);
      setGroups(groupsRes.data);
      setWithdrawals(withdrawalsRes.data);
      setWallets(walletData);
      setWalletTransactions(walletTxRes.data || []);
      setContacts(contactData);
      setAgents(agentData);
      setAgentStats(agentStatsData);
    } catch (err) {
      console.error('Failed to fetch data:', err);
      showSnackbar('Failed to load dashboard data', 'error');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/admin/login');
      return;
    }
    fetchAllData();
  }, [user]);

  // ============ UTILITY FUNCTIONS ============
  const formatCurrency = (amount) => {
    if (amount === null || amount === undefined) return '0';
    return amount.toLocaleString();
  };

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchAllData();
  };

  const handleViewDetails = (item, type) => {
    setSelectedItem(item);
    setModalType(type);
    setShowDetailsModal(true);
  };

  const handleViewRiderProfile = (rider) => {
    setSelectedRiderProfile(rider);
    setProfileDialogOpen(true);
  };

  const getStatusChipSx = (status) => {
    const s = (status || '').toLowerCase();
    if (s === 'completed' || s === 'active') return { bgcolor: alpha('#10B981', 0.1), color: '#065F46' };
    if (s === 'cancelled' || s === 'suspended' || s === 'inactive') return { bgcolor: alpha('#DC2626', 0.1), color: '#991B1B' };
    if (s === 'pending') return { bgcolor: alpha('#F59E0B', 0.1), color: '#92400E' };
    return { bgcolor: alpha('#6B7280', 0.1), color: '#374151' };
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'customer': return '#0025DD';
      case 'supplier': return '#F59E0B';
      case 'employee': return '#10B981';
      default: return '#64748B';
    }
  };

  const getTypeBackgroundColor = (type) => {
    switch (type) {
      case 'customer': return alpha('#0025DD', 0.1);
      case 'supplier': return alpha('#F59E0B', 0.1);
      case 'employee': return alpha('#10B981', 0.1);
      default: return alpha('#64748B', 0.1);
    }
  };

  // ============ CONTACT MANAGEMENT FUNCTIONS ============
  const handleOpenAddContact = () => {
    setCurrentContact({
      full_name: "",
      type: "customer",
      phone: "",
      email: "",
      location: "",
      bussiness_name: "",
      loyalty_points: 0,
      status: "active",
      rider: user?.user_id || null
    });
    setContactEditMode(true);
    setContactDialogOpen(true);
    setContactValidationErrors({});
  };

  const handleOpenEditContact = (contact) => {
    setCurrentContact({ 
      ...contact,
      full_name: contact.full_name || '',
      phone: contact.phone || '',
      email: contact.email || '',
      location: contact.location || '',
      bussiness_name: contact.bussiness_name || '',
      loyalty_points: contact.loyalty_points || 0,
      rider: contact.rider || user?.user_id || null
    });
    setContactEditMode(true);
    setContactDialogOpen(true);
    setContactValidationErrors({});
  };

  const validateContactForm = () => {
    const errors = {};
    if (!currentContact?.full_name?.trim()) {
      errors.full_name = 'Full name is required';
    }
    if (!currentContact?.phone?.trim()) {
      errors.phone = 'Phone number is required';
    }
    if (!currentContact?.location?.trim()) {
      errors.location = 'Location is required';
    }
    if (!currentContact?.bussiness_name?.trim()) {
      errors.bussiness_name = 'Business name is required';
    }
    setContactValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSaveContact = async () => {
    if (!validateContactForm()) return;

    setContactLoading(true);
    try {
      if (currentContact.id) {
        await AxiosInstance.put(`/api/admin/contacts/${currentContact.id}`, currentContact);
        showSnackbar('Contact updated successfully', 'success');
      } else {
        await AxiosInstance.post('/api/admin/contacts/create', currentContact);
        showSnackbar('Contact added successfully', 'success');
      }
      setContactDialogOpen(false);
      fetchAllData();
    } catch (error) {
      showSnackbar('Failed to save contact', 'error');
    } finally {
      setContactLoading(false);
    }
  };

  const handleDeleteContact = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;
    
    try {
      await AxiosInstance.delete(`/api/admin/contacts/${id}`);
      setContacts(contacts.filter(c => c.id !== id));
      showSnackbar('Contact deleted successfully', 'success');
    } catch (error) {
      showSnackbar('Failed to delete contact', 'error');
    }
  };

  // ============ EXPORT FUNCTIONS ============
  const exportContactsPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(20);
      doc.setTextColor(0, 37, 221);
      doc.text('Contacts Report', 14, 22);
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 30);
      
      const tableData = contacts.map(c => [
        c.full_name || 'N/A',
        c.type || 'N/A',
        c.phone || 'N/A',
        c.email || 'N/A',
        c.bussiness_name || 'N/A',
        c.loyalty_points?.toString() || '0',
        c.status || 'N/A'
      ]);
      
      autoTable(doc, {
        startY: 40,
        head: [['Name', 'Type', 'Phone', 'Email', 'Business', 'Points', 'Status']],
        body: tableData,
        theme: 'striped',
        headStyles: { fillColor: [0, 37, 221] }
      });
      
      doc.save(`contacts-report-${new Date().toISOString().split('T')[0]}.pdf`);
      showSnackbar('PDF exported successfully', 'success');
    } catch (error) {
      showSnackbar('Failed to export PDF', 'error');
    }
  };

  const exportWalletsPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(20);
      doc.setTextColor(0, 37, 221);
      doc.text('Wallets Report', 14, 22);
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 30);
      
      const tableData = wallets.map(w => [
        w.rider_name || 'N/A',
        `UGX ${formatCurrency(w.balance)}`,
        `UGX ${formatCurrency(w.available_balance)}`,
        `UGX ${formatCurrency(w.reserved_balance)}`,
        w.currency || 'UGX',
        w.is_active ? 'Active' : 'Inactive'
      ]);
      
      autoTable(doc, {
        startY: 40,
        head: [['Rider', 'Balance', 'Available', 'Reserved', 'Currency', 'Status']],
        body: tableData,
        theme: 'striped',
        headStyles: { fillColor: [0, 37, 221] }
      });
      
      doc.save(`wallets-report-${new Date().toISOString().split('T')[0]}.pdf`);
      showSnackbar('PDF exported successfully', 'success');
    } catch (error) {
      showSnackbar('Failed to export PDF', 'error');
    }
  };

  const exportAgentsPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(20);
      doc.setTextColor(0, 37, 221);
      doc.text('Rider Agents Report', 14, 22);
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 30);
      
      const tableData = agents.map(a => [
        a.rider_name || 'N/A',
        a.referral_code || 'N/A',
        a.total_referrals?.toString() || '0',
        `UGX ${formatCurrency(a.total_commission)}`,
        a.is_active ? 'Active' : 'Inactive'
      ]);
      
      autoTable(doc, {
        startY: 40,
        head: [['Rider', 'Referral Code', 'Referrals', 'Commission', 'Status']],
        body: tableData,
        theme: 'striped',
        headStyles: { fillColor: [0, 37, 221] }
      });
      
      doc.save(`agents-report-${new Date().toISOString().split('T')[0]}.pdf`);
      showSnackbar('PDF exported successfully', 'success');
    } catch (error) {
      showSnackbar('Failed to export PDF', 'error');
    }
  };

  // ============ STATS CARDS ============
  const statsCards = [
    { label: 'Total Riders', value: dashboardStats.totalRiders, subValue: `${dashboardStats.activeRiders} active`, icon: PeopleIcon, color: '#0025DD' },
    { label: 'Total Revenue', value: `UGX ${formatCurrency(dashboardStats.totalRevenue)}`, subValue: `Today: UGX ${formatCurrency(dashboardStats.todayRevenue)}`, icon: AccountBalanceWalletIcon, color: '#10B981' },
    { label: 'Total Trips', value: dashboardStats.totalTrips, subValue: `${dashboardStats.totalDeliveries} deliveries`, icon: DirectionsCarIcon, color: '#FFC107' },
    { label: 'Total Expenses', value: `UGX ${formatCurrency(dashboardStats.totalExpenses)}`, subValue: 'Rider expenses', icon: LocalGasStationIcon, color: '#DC2626' },
    { label: 'Active Groups', value: dashboardStats.activeGroups, subValue: `${dashboardStats.totalGroups} total groups`, icon: GroupsIcon, color: '#8B5CF6' },
    { label: 'Group Pool', value: `UGX ${formatCurrency(dashboardStats.groupPool)}`, subValue: 'Total savings', icon: AccountBalanceIcon, color: '#F59E0B' },
    { label: 'Total Wallets', value: dashboardStats.totalWallets, subValue: `UGX ${formatCurrency(dashboardStats.totalWalletBalance)} balance`, icon: WalletIcon, color: '#06B6D4' },
    { label: 'Total Contacts', value: dashboardStats.totalContacts, subValue: `${dashboardStats.activeContacts} active`, icon: ContactsIcon, color: '#EC4899' },
    { label: 'Total Agents', value: dashboardStats.totalAgents, subValue: `${dashboardStats.activeAgents} active`, icon: PeopleIcon, color: '#8B5CF6' },
    { label: 'Agent Commissions', value: `UGX ${formatCurrency(dashboardStats.totalAgentCommissions)}`, subValue: 'Total paid out', icon: PaidIcon, color: '#10B981' },
  ];

  // ============ RENDER SIDEBAR ============
  const renderSidebar = () => (
    <SidebarContainer className={mobileSidebarOpen ? 'open' : ''}>
      <Box sx={{ p: 3, borderBottom: '1px solid rgba(0, 0, 0, 0.08)', background: 'linear-gradient(135deg, #0025DD 0%, #2D4BFF 100%)' }}>
        <Typography variant="h5" fontWeight="bold" color="white">
          Enfuna Admin
        </Typography>
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
          Super Admin Panel
        </Typography>
      </Box>
      
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Avatar sx={{ bgcolor: '#0025DD', width: 48, height: 48 }}>
            <AdminPanelSettingsIcon />
          </Avatar>
          <Box>
            <Typography variant="body2" fontWeight="bold">{user?.full_names || 'Admin'}</Typography>
            <Typography variant="caption" color="text.secondary">Super Administrator</Typography>
          </Box>
        </Box>
      </Box>
      
      <Divider sx={{ mx: 2 }} />
      
      <List sx={{ flex: 1, px: 1, py: 2 }}>
        {[
          { label: 'Dashboard', icon: DashboardIcon, tab: 0 },
          { label: 'Riders', icon: PeopleIcon, tab: 1 },
          { label: 'Trips', icon: DirectionsCarIcon, tab: 2 },
          { label: 'Deliveries', icon: LocalShippingIcon, tab: 3 },
          { label: 'Expenses', icon: ReceiptIcon, tab: 4 },
          { label: 'Groups', icon: GroupsIcon, tab: 5 },
          { label: 'Wallets', icon: WalletIcon, tab: 6, badge: withdrawals.length },
          { label: 'Contacts', icon: ContactsIcon, tab: 7 },
          { label: 'Agents', icon: PeopleIcon, tab: 8 },
          { label: 'Withdrawals', icon: AccountBalanceIcon, tab: 9, badge: withdrawals.length },
        ].map((item) => (
          <ListItem 
            key={item.tab}
            component="div"
            onClick={() => {
              setActiveTab(item.tab);
              setMobileSidebarOpen(false);
            }}
            sx={{ 
              borderRadius: 2, 
              mb: 0.5,
              cursor: 'pointer',
              bgcolor: activeTab === item.tab ? alpha('#0025DD', 0.08) : 'transparent',
              '&:hover': {
                bgcolor: alpha('#0025DD', 0.05),
              },
            }}
          >
            <ListItemIcon>
              <item.icon sx={{ color: activeTab === item.tab ? '#0025DD' : '#64748B' }} />
            </ListItemIcon>
            <ListItemText 
              primary={item.label} 
              primaryTypographyProps={{ 
                fontWeight: activeTab === item.tab ? 600 : 400,
                color: activeTab === item.tab ? '#0025DD' : 'inherit',
              }}
            />
            {item.badge > 0 && (
              <Chip 
                label={item.badge} 
                size="small" 
                sx={{ 
                  bgcolor: '#DC2626', 
                  color: 'white',
                  height: 20,
                  '& .MuiChip-label': { fontSize: '0.7rem', px: 1 }
                }} 
              />
            )}
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ p: 2, borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <ActionButton
          fullWidth
          variant="outlined"
          startIcon={<SettingsIcon />}
          sx={{ mb: 1, borderColor: '#0025DD', color: '#0025DD' }}
        >
          Settings
        </ActionButton>
        <ActionButton
          fullWidth
          variant="contained"
          startIcon={<LogoutIcon />}
          sx={{ bgcolor: '#DC2626', '&:hover': { bgcolor: '#B91C1C' } }}
          onClick={() => navigate('/admin/login')}
        >
          Logout
        </ActionButton>
      </Box>
    </SidebarContainer>
  );

  // ============ RENDER DASHBOARD TAB ============
  const renderDashboardTab = () => (
    <Box sx={{ p: { xs: 2, sm: 3 } }}>
      {/* Header */}
      <StyledCard sx={{ mb: 3 }}>
        <Box sx={{ 
          background: greeting.isHoliday 
            ? `linear-gradient(135deg, ${greeting.color} 0%, ${greeting.color}dd 100%)`
            : 'linear-gradient(135deg, #0025DD 0%, #2D4BFF 100%)',
          p: { xs: 2, sm: 3 }, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {greeting.icon && <greeting.icon sx={{ color: 'white', fontSize: { xs: 28, sm: 32 } }} />}
            <Box>
              <Typography variant="h5" fontWeight="bold" color="white" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                {greeting.text}, Administrator!
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </Typography>
            </Box>
          </Box>
          
          <ActionButton
            variant="contained"
            startIcon={<RefreshIcon />}
            onClick={handleRefresh}
            disabled={refreshing}
            sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }}
          >
            {refreshing ? <CircularProgress size={20} color="inherit" /> : 'Refresh'}
          </ActionButton>
        </Box>
      </StyledCard>

      {/* Stats Cards */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {statsCards.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <StatCard bgcolor={stat.color}>
              <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box>
                    <Typography variant="caption" sx={{ opacity: 0.9, fontSize: '0.7rem' }}>{stat.label}</Typography>
                    <Typography variant="h6" fontWeight="bold" sx={{ mt: 0.5, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8, fontSize: '0.65rem' }}>{stat.subValue}</Typography>
                  </Box>
                  <stat.icon sx={{ fontSize: { xs: 28, sm: 32 }, opacity: 0.9 }} />
                </Box>
              </CardContent>
            </StatCard>
          </Grid>
        ))}
      </Grid>

      {/* Recent Activity Overview */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0, 0, 0, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight="bold" color="#0025DD">Recent Trips</Typography>
              <Button size="small" onClick={() => setActiveTab(2)} sx={{ color: '#0025DD' }}>View All</Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Rider</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {trips.slice(0, 5).map((trip) => (
                    <TableRow key={trip.id} hover>
                      <TableCell>{trip.rider_name}</TableCell>
                      <TableCell>UGX {formatCurrency(trip.trip_fare)}</TableCell>
                      <TableCell>
                        <StatusChip status={trip.status} label={trip.status} />
                      </TableCell>
                    </TableRow>
                  ))}
                  {trips.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={3} align="center">No trips data available</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </StyledCard>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <StyledCard>
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0, 0, 0, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight="bold" color="#0025DD">Recent Expenses</Typography>
              <Button size="small" onClick={() => setActiveTab(4)} sx={{ color: '#0025DD' }}>View All</Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Rider</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {expenses.slice(0, 5).map((expense) => (
                    <TableRow key={expense.id} hover>
                      <TableCell>{expense.rider_name}</TableCell>
                      <TableCell>{expense.category}</TableCell>
                      <TableCell sx={{ color: '#DC2626', fontWeight: 500 }}>UGX {formatCurrency(expense.amount)}</TableCell>
                    </TableRow>
                  ))}
                  {expenses.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={3} align="center">No expenses data available</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </StyledCard>
        </Grid>
      </Grid>

      {/* Wallet, Contact & Agent Overview */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <StyledCard>
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0, 0, 0, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight="bold" color="#0025DD">Wallet Activity</Typography>
              <Button size="small" onClick={() => setActiveTab(6)} sx={{ color: '#0025DD' }}>View All</Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Rider</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {walletTransactions.slice(0, 3).map((tx) => (
                    <TableRow key={tx.id} hover>
                      <TableCell>{tx.rider_name}</TableCell>
                      <TableCell>
                        <Chip label={tx.entry_type} size="small" sx={{ fontSize: '0.7rem' }} />
                      </TableCell>
                      <TableCell sx={{ color: tx.entry_type === 'CREDIT' ? '#10B981' : '#DC2626', fontWeight: 500 }}>
                        UGX {formatCurrency(tx.amount)}
                      </TableCell>
                    </TableRow>
                  ))}
                  {walletTransactions.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={3} align="center">No wallet activity</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </StyledCard>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <StyledCard>
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0, 0, 0, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight="bold" color="#0025DD">Recent Contacts</Typography>
              <Button size="small" onClick={() => setActiveTab(7)} sx={{ color: '#0025DD' }}>View All</Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Phone</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contacts.slice(0, 3).map((contact) => (
                    <TableRow key={contact.id} hover>
                      <TableCell>{contact.full_name}</TableCell>
                      <TableCell>
                        <Chip 
                          label={contact.type} 
                          size="small" 
                          sx={{ bgcolor: getTypeBackgroundColor(contact.type), color: getTypeColor(contact.type) }}
                        />
                      </TableCell>
                      <TableCell>{contact.phone}</TableCell>
                    </TableRow>
                  ))}
                  {contacts.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={3} align="center">No contacts available</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </StyledCard>
        </Grid>

        <Grid item xs={12} md={4}>
          <StyledCard>
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0, 0, 0, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight="bold" color="#0025DD">Top Agents</Typography>
              <Button size="small" onClick={() => setActiveTab(8)} sx={{ color: '#0025DD' }}>View All</Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Agent</TableCell>
                    <TableCell>Referrals</TableCell>
                    <TableCell>Commission</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {agents.slice(0, 3).map((agent) => (
                    <TableRow key={agent.id} hover>
                      <TableCell>{agent.rider_name}</TableCell>
                      <TableCell>{agent.total_referrals || 0}</TableCell>
                      <TableCell sx={{ color: '#10B981', fontWeight: 500 }}>UGX {formatCurrency(agent.total_commission)}</TableCell>
                    </TableRow>
                  ))}
                  {agents.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={3} align="center">No agents available</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );

  // ============ GENERIC TABLE VIEW ============
  const renderTableView = (title, data, columns, type, extraFilters = null, extraActions = null) => {
    const filteredData = data.filter(item => {
      const searchable = columns.map(col => item[col.key]?.toString().toLowerCase() || '').join(' ');
      const matchesSearch = searchable.includes(searchQuery.toLowerCase());
      
      let matchesFilter = true;
      if (statusFilter !== 'all' && item.status) {
        matchesFilter = item.status?.toLowerCase() === statusFilter.toLowerCase();
      }
      if (typeFilter !== 'all' && item.type) {
        matchesFilter = matchesFilter && item.type?.toLowerCase() === typeFilter.toLowerCase();
      }
      
      return matchesSearch && matchesFilter;
    });

    const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
      <Box sx={{ p: { xs: 1.5, sm: 2, md: 3 } }}>
        <StyledCard>
          <Box sx={{ p: { xs: 1.5, sm: 2 }, borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'stretch', sm: 'center' }, gap: 2, mb: 2 }}>
              <Typography variant="h6" fontWeight="bold" color="#0025DD" sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                {title}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {type === 'contact' && (
                  <>
                    <ActionButton
                      variant="contained"
                      startIcon={<AddIcon />}
                      onClick={handleOpenAddContact}
                      sx={{ bgcolor: '#FFEC01', color: '#000', '&:hover': { bgcolor: '#E6D400' } }}
                      size="small"
                    >
                      Add Contact
                    </ActionButton>
                    <ActionButton
                      variant="outlined"
                      startIcon={<FileDownloadIcon />}
                      onClick={exportContactsPDF}
                      sx={{ borderColor: '#0025DD', color: '#0025DD' }}
                      size="small"
                    >
                      Export
                    </ActionButton>
                  </>
                )}
                {type === 'wallet' && (
                  <ActionButton
                    variant="outlined"
                    startIcon={<FileDownloadIcon />}
                    onClick={exportWalletsPDF}
                    sx={{ borderColor: '#0025DD', color: '#0025DD' }}
                    size="small"
                  >
                    Export
                  </ActionButton>
                )}
                {type === 'agent' && (
                  <ActionButton
                    variant="outlined"
                    startIcon={<FileDownloadIcon />}
                    onClick={exportAgentsPDF}
                    sx={{ borderColor: '#0025DD', color: '#0025DD' }}
                    size="small"
                  >
                    Export
                  </ActionButton>
                )}
              </Box>
            </Box>
            
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <SearchBar
                  fullWidth
                  size="small"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon sx={{ color: '#94A3B8' }} /></InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <FormControl fullWidth size="small">
                  <InputLabel>Status</InputLabel>
                  <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} label="Status">
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {extraFilters && (
                <Grid item xs={6} md={3}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Type</InputLabel>
                    <Select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} label="Type">
                      <MenuItem value="all">All</MenuItem>
                      <MenuItem value="customer">Customer</MenuItem>
                      <MenuItem value="supplier">Supplier</MenuItem>
                      <MenuItem value="employee">Employee</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              )}
            </Grid>
          </Box>

          <TableContainer sx={{ overflowX: 'auto' }}>
            <Table size={isMobile ? "small" : "medium"}>
              <TableHead>
                <TableRow>
                  {columns.map((col) => (
                    <TableCell key={col.key} sx={{ fontWeight: 600, whiteSpace: 'nowrap' }}>{col.label}</TableCell>
                  ))}
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={columns.length + 1} align="center" sx={{ py: 4 }}>
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                ) : paginatedData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={columns.length + 1} align="center" sx={{ py: 4 }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                        <ErrorIcon sx={{ color: '#94A3B8', fontSize: 40 }} />
                        <Typography color="text.secondary">No data found</Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedData.map((item) => (
                    <TableRow key={item.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      {columns.map((col) => (
                        <TableCell key={col.key} sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {col.render ? col.render(item) : item[col.key]}
                        </TableCell>
                      ))}
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                          <Tooltip title="View Details">
                            <IconButton size="small" onClick={() => handleViewDetails(item, type)}>
                              <VisibilityIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          {type === 'contact' && (
                            <>
                              <Tooltip title="Edit">
                                <IconButton size="small" onClick={() => handleOpenEditContact(item)}>
                                  <EditIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Delete">
                                <IconButton size="small" onClick={() => handleDeleteContact(item.id)}>
                                  <DeleteIcon fontSize="small" sx={{ color: '#DC2626' }} />
                                </IconButton>
                              </Tooltip>
                            </>
                          )}
                          {type === 'rider' && (
                            <Tooltip title="View Profile">
                              <IconButton size="small" onClick={() => handleViewRiderProfile(item)}>
                                <PersonIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          )}
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
          
          <TablePagination
            component="div"
            count={filteredData.length}
            page={page}
            onPageChange={(e, newPage) => setPage(newPage)}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={(e) => {
              setRowsPerPage(parseInt(e.target.value, 10));
              setPage(0);
            }}
            rowsPerPageOptions={[5, 10, 25, 50]}
          />
        </StyledCard>
      </Box>
    );
  };

  // ============ RENDER CONTACTS TAB ============
  const renderContactsTab = () => {
    const contactColumns = [
      { key: 'full_name', label: 'Name', render: (c) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar sx={{ width: 32, height: 32, bgcolor: getTypeBackgroundColor(c.type), color: getTypeColor(c.type) }}>
            {c.full_name?.charAt(0)?.toUpperCase() || '?'}
          </Avatar>
          <Typography variant="body2" noWrap>{c.full_name}</Typography>
        </Box>
      )},
      { key: 'type', label: 'Type', render: (c) => (
        <Chip 
          label={c.type} 
          size="small" 
          sx={{ bgcolor: getTypeBackgroundColor(c.type), color: getTypeColor(c.type), fontWeight: 500 }}
        />
      )},
      { key: 'phone', label: 'Phone' },
      { key: 'email', label: 'Email' },
      { key: 'bussiness_name', label: 'Business', render: (c) => c.bussiness_name || 'N/A' },
      { key: 'loyalty_points', label: 'Points', render: (c) => (
        <Typography fontWeight="bold" color="#F59E0B">{c.loyalty_points || 0}</Typography>
      )},
      { key: 'status', label: 'Status', render: (c) => (
        <StatusChip status={c.status} label={c.status} />
      )},
    ];

    return renderTableView('Contacts Management', contacts, contactColumns, 'contact', true);
  };

  // ============ RENDER WALLETS TAB ============
  const renderWalletsTab = () => {
    const walletColumns = [
      { key: 'rider_name', label: 'Rider', render: (w) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar sx={{ width: 32, height: 32, bgcolor: '#0025DD' }}>
            <PersonIcon fontSize="small" />
          </Avatar>
          <Typography variant="body2" noWrap>{w.rider_name || 'N/A'}</Typography>
        </Box>
      )},
      { key: 'balance', label: 'Balance', render: (w) => `UGX ${formatCurrency(w.balance)}` },
      { key: 'available_balance', label: 'Available', render: (w) => (
        <Typography color="#10B981" fontWeight="bold">UGX {formatCurrency(w.available_balance)}</Typography>
      )},
      { key: 'reserved_balance', label: 'Reserved', render: (w) => `UGX ${formatCurrency(w.reserved_balance)}` },
      { key: 'currency', label: 'Currency' },
      { key: 'is_active', label: 'Status', render: (w) => (
        <StatusChip status={w.is_active ? 'active' : 'inactive'} label={w.is_active ? 'Active' : 'Inactive'} />
      )},
    ];

    return renderTableView('Wallet Management', wallets, walletColumns, 'wallet');
  };

  // ============ RENDER AGENTS TAB ============
  const renderAgentsTab = () => {
    const agentColumns = [
      { key: 'rider_name', label: 'Agent', render: (a) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar sx={{ width: 32, height: 32, bgcolor: '#8B5CF6' }}>
            <PersonIcon fontSize="small" />
          </Avatar>
          <Typography variant="body2" noWrap>{a.rider_name || 'N/A'}</Typography>
        </Box>
      )},
      { key: 'referral_code', label: 'Referral Code', render: (a) => (
        <Typography fontWeight="bold" sx={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>{a.referral_code}</Typography>
      )},
      { key: 'total_referrals', label: 'Referrals', render: (a) => a.total_referrals || 0 },
      { key: 'total_commission', label: 'Total Commission', render: (a) => (
        <Typography color="#10B981" fontWeight="bold">UGX {formatCurrency(a.total_commission)}</Typography>
      )},
      { key: 'is_active', label: 'Status', render: (a) => (
        <StatusChip status={a.is_active ? 'active' : 'inactive'} label={a.is_active ? 'Active' : 'Inactive'} />
      )},
      { key: 'created_at', label: 'Joined', render: (a) => new Date(a.created_at).toLocaleDateString() },
    ];

    return (
      <Box sx={{ p: { xs: 1.5, sm: 2, md: 3 } }}>
        {/* Agent Stats Cards */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {[
            { label: 'Today Onboarded', value: agentStats.todayOnboardedUsers || 0, icon: PeopleIcon, color: '#0025DD' },
            { label: 'Active Today', value: agentStats.activeToday || 0, icon: TrendingUpIcon, color: '#10B981' },
            { label: 'Team Trips', value: agentStats.teamTrips || 0, icon: DirectionsCarIcon, color: '#FFC107' },
            { label: 'Today Deliveries', value: agentStats.todayDeliveries || 0, icon: LocalShippingIcon, color: '#F59E0B' },
          ].map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <StatCard bgcolor={stat.color}>
                <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box>
                      <Typography variant="caption" sx={{ opacity: 0.9, fontSize: '0.7rem' }}>{stat.label}</Typography>
                      <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                        {stat.value}
                      </Typography>
                    </Box>
                    <stat.icon sx={{ fontSize: { xs: 24, sm: 28 }, opacity: 0.9 }} />
                  </Box>
                </CardContent>
              </StatCard>
            </Grid>
          ))}
        </Grid>
        
        {renderTableView('Rider Agents Management', agents, agentColumns, 'agent')}
      </Box>
    );
  };

  // ============ RIDER PROFILE DIALOG ============
  const renderRiderProfileDialog = () => {
    const rider = selectedRiderProfile;
    if (!rider) return null;

    return (
      <Dialog 
        open={profileDialogOpen} 
        onClose={() => setProfileDialogOpen(false)}
        maxWidth="md"
        fullWidth
        fullScreen={isMobile}
        TransitionComponent={Slide}
      >
        <DialogTitle sx={{ bgcolor: '#0025DD', color: 'white' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" fontWeight="bold">
              Rider Profile: {rider.full_names || rider.first_name}
            </Typography>
            <IconButton onClick={() => setProfileDialogOpen(false)} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar 
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    mx: 'auto', 
                    mb: 2,
                    bgcolor: '#0025DD',
                    fontSize: '3rem'
                  }}
                  src={rider.profile_photo}
                >
                  {rider.full_names?.charAt(0) || rider.first_name?.charAt(0) || 'R'}
                </Avatar>
                <Typography variant="h6" fontWeight="bold">{rider.full_names || `${rider.first_name} ${rider.last_name}`}</Typography>
                <StatusChip status={rider.status} label={rider.status} sx={{ mt: 1 }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" color="text.secondary">Email</Typography>
                  <Typography variant="body2">{rider.email || 'N/A'}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" color="text.secondary">Phone</Typography>
                  <Typography variant="body2">{rider.phone_number || 'N/A'}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" color="text.secondary">Rider Type</Typography>
                  <Typography variant="body2">{rider.rider_type || 'N/A'}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" color="text.secondary">Vehicle Type</Typography>
                  <Typography variant="body2">{rider.vehicle_type || 'N/A'}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" color="text.secondary">License Plate</Typography>
                  <Typography variant="body2">{rider.license_plate || 'N/A'}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" color="text.secondary">Total Trips</Typography>
                  <Typography variant="body2" fontWeight="bold">{rider.total_trips || 0}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" color="text.secondary">Total Earnings</Typography>
                  <Typography variant="body2" fontWeight="bold" color="#10B981">
                    UGX {formatCurrency(rider.total_earnings)}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" color="text.secondary">Joined</Typography>
                  <Typography variant="body2">{new Date(rider.created_at).toLocaleDateString()}</Typography>
                </Grid>
                {rider.is_agent && (
                  <Grid item xs={12}>
                    <Alert severity="info" sx={{ mt: 1, borderRadius: 2 }}>
                      This rider is also a Rider Agent
                    </Alert>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 2, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          <Button onClick={() => setProfileDialogOpen(false)}>Close</Button>
          <ActionButton 
            variant="contained"
            sx={{ bgcolor: '#0025DD' }}
            startIcon={<EditIcon />}
          >
            Edit Profile
          </ActionButton>
        </DialogActions>
      </Dialog>
    );
  };

  // ============ CONTACT DIALOG ============
  const renderContactDialog = () => (
    <Dialog 
      open={contactDialogOpen} 
      onClose={() => setContactDialogOpen(false)}
      maxWidth="sm"
      fullWidth
      fullScreen={isMobile}
      TransitionComponent={Slide}
    >
      <DialogTitle sx={{ bgcolor: '#0025DD', color: 'white' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight="bold">
            {currentContact?.id ? 'Edit Contact' : 'Add Contact'}
          </Typography>
          <IconButton onClick={() => setContactDialogOpen(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Full Name *"
              value={currentContact?.full_name || ''}
              onChange={(e) => setCurrentContact({...currentContact, full_name: e.target.value})}
              error={!!contactValidationErrors.full_name}
              helperText={contactValidationErrors.full_name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Contact Type</InputLabel>
              <Select
                label="Contact Type"
                value={currentContact?.type || 'customer'}
                onChange={(e) => setCurrentContact({...currentContact, type: e.target.value})}
              >
                <MenuItem value="customer">Customer</MenuItem>
                <MenuItem value="supplier">Supplier</MenuItem>
                <MenuItem value="employee">Employee</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                value={currentContact?.status || 'active'}
                onChange={(e) => setCurrentContact({...currentContact, status: e.target.value})}
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number *"
              value={currentContact?.phone || ''}
              onChange={(e) => setCurrentContact({...currentContact, phone: e.target.value})}
              error={!!contactValidationErrors.phone}
              helperText={contactValidationErrors.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={currentContact?.email || ''}
              onChange={(e) => setCurrentContact({...currentContact, email: e.target.value})}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Location *"
              value={currentContact?.location || ''}
              onChange={(e) => setCurrentContact({...currentContact, location: e.target.value})}
              error={!!contactValidationErrors.location}
              helperText={contactValidationErrors.location}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Business Name *"
              value={currentContact?.bussiness_name || ''}
              onChange={(e) => setCurrentContact({...currentContact, bussiness_name: e.target.value})}
              error={!!contactValidationErrors.bussiness_name}
              helperText={contactValidationErrors.bussiness_name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Loyalty Points"
              type="number"
              value={currentContact?.loyalty_points || 0}
              onChange={(e) => setCurrentContact({...currentContact, loyalty_points: parseInt(e.target.value) || 0})}
              InputProps={{ inputProps: { min: 0 } }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ p: 2, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        <Button onClick={() => setContactDialogOpen(false)}>Cancel</Button>
        <ActionButton 
          variant="contained"
          sx={{ bgcolor: '#0025DD' }}
          onClick={handleSaveContact}
          disabled={contactLoading}
        >
          {contactLoading ? <CircularProgress size={20} /> : 'Save Contact'}
        </ActionButton>
      </DialogActions>
    </Dialog>
  );

  // ============ MAIN RENDER ============
  return (
    <Box sx={{ display: 'flex', bgcolor: '#F8FAFC', minHeight: '100vh' }}>
      {renderSidebar()}
      
      <MainContent>
        {/* Mobile Header */}
        {isMobile && (
          <Box sx={{ 
            p: 2, 
            bgcolor: 'white', 
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 100,
          }}>
            <IconButton onClick={() => setMobileSidebarOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" fontWeight="bold" color="#0025DD">
              Enfuna Admin
            </Typography>
            <IconButton onClick={handleRefresh} disabled={refreshing}>
              {refreshing ? <CircularProgress size={20} /> : <RefreshIcon />}
            </IconButton>
          </Box>
        )}
        
        {/* Tab Content */}
        {loading && activeTab === 0 ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {activeTab === 0 && renderDashboardTab()}
            
            {activeTab === 1 && renderTableView('Riders Management', riders, [
              { key: 'full_names', label: 'Name', render: (r) => (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar sx={{ width: 32, height: 32, bgcolor: '#0025DD' }}>
                    <PersonIcon fontSize="small" />
                  </Avatar>
                  <Typography variant="body2" noWrap>{r.full_names}</Typography>
                </Box>
              )},
              { key: 'email', label: 'Email' },
              { key: 'phone_number', label: 'Phone' },
              { key: 'status', label: 'Status', render: (r) => (
                <StatusChip status={r.status} label={r.status} />
              )},
              { key: 'total_trips', label: 'Trips' },
            ], 'rider')}
            
            {activeTab === 2 && renderTableView('Trips Management', trips, [
              { key: 'id', label: 'Trip ID', render: (t) => t.id?.slice(0, 8) },
              { key: 'rider_name', label: 'Rider' },
              { key: 'pickup_location', label: 'Route', render: (t) => `${t.pickup_location} → ${t.destination}` },
              { key: 'trip_fare', label: 'Amount', render: (t) => `UGX ${formatCurrency(t.trip_fare)}` },
              { key: 'payment_method', label: 'Payment', render: (t) => (
                <Chip label={t.payment_method} size="small" sx={{ textTransform: 'capitalize' }} />
              )},
              { key: 'status', label: 'Status', render: (t) => (
                <StatusChip status={t.status} label={t.status} />
              )},
            ], 'trip')}
            
            {activeTab === 3 && renderTableView('Deliveries Management', deliveries, [
              { key: 'id', label: 'Delivery ID', render: (d) => d.id?.slice(0, 8) },
              { key: 'rider_name', label: 'Rider' },
              { key: 'package_type', label: 'Package' },
              { key: 'delivery_fee', label: 'Fee', render: (d) => `UGX ${formatCurrency(d.delivery_fee)}` },
              { key: 'payment_method', label: 'Payment', render: (d) => (
                <Chip label={d.payment_method} size="small" sx={{ textTransform: 'capitalize' }} />
              )},
              { key: 'status', label: 'Status', render: (d) => (
                <StatusChip status={d.status} label={d.status} />
              )},
            ], 'delivery')}
            
            {activeTab === 4 && renderTableView('Expenses Management', expenses, [
              { key: 'id', label: 'Expense ID', render: (e) => e.id?.slice(0, 8) },
              { key: 'rider_name', label: 'Rider' },
              { key: 'category', label: 'Category' },
              { key: 'amount', label: 'Amount', render: (e) => (
                <Typography color="#DC2626" fontWeight="bold">UGX {formatCurrency(e.amount)}</Typography>
              )},
              { key: 'expense_type', label: 'Type' },
              { key: 'created_at', label: 'Date', render: (e) => new Date(e.created_at).toLocaleDateString() },
            ], 'expense')}
            
            {activeTab === 5 && renderTableView('Groups Management', groups, [
              { key: 'name', label: 'Group Name' },
              { key: 'group_type', label: 'Type', render: (g) => (
                <Chip label={g.group_type} size="small" />
              )},
              { key: 'member_count', label: 'Members', render: (g) => `${g.member_count || 0}/${g.max_members}` },
              { key: 'contrib_amount', label: 'Contribution', render: (g) => `UGX ${formatCurrency(g.contrib_amount)}` },
              { key: 'total_pool', label: 'Pool', render: (g) => `UGX ${formatCurrency(g.total_pool)}` },
              { key: 'is_public', label: 'Visibility', render: (g) => (
                <Chip label={g.is_public ? 'Public' : 'Private'} size="small" 
                  sx={{ bgcolor: g.is_public ? alpha('#10B981', 0.1) : alpha('#6B7280', 0.1) }} />
              )},
            ], 'group')}
            
            {activeTab === 6 && renderWalletsTab()}
            
            {activeTab === 7 && renderContactsTab()}
            
            {activeTab === 8 && renderAgentsTab()}
            
            {activeTab === 9 && renderTableView('Pending Withdrawals', withdrawals, [
              { key: 'id', label: 'Request ID', render: (w) => w.id?.slice(0, 8) },
              { key: 'rider_name', label: 'Rider' },
              { key: 'amount', label: 'Amount', render: (w) => `UGX ${formatCurrency(w.amount)}` },
              { key: 'payment_method', label: 'Method' },
              { key: 'phone_number', label: 'Phone' },
              { key: 'created_at', label: 'Requested', render: (w) => new Date(w.created_at).toLocaleString() },
            ], 'withdrawal')}
          </>
        )}
      </MainContent>

      {/* Mobile Sidebar Drawer */}
      <Drawer 
        open={mobileSidebarOpen} 
        onClose={() => setMobileSidebarOpen(false)}
        sx={{ '& .MuiDrawer-paper': { width: 280 } }}
      >
        {renderSidebar()}
      </Drawer>

      {/* Details Modal */}
      <DetailsModal
        open={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        title={`${modalType.charAt(0).toUpperCase() + modalType.slice(1)} Details`}
        data={selectedItem}
        type={modalType}
      />

      {/* Rider Profile Dialog */}
      {renderRiderProfileDialog()}

      {/* Contact Dialog */}
      {renderContactDialog()}

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        TransitionComponent={Slide}
      >
        <Alert 
          severity={snackbar.severity} 
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          sx={{ borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SuperAdminDashboard;