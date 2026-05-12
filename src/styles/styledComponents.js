import { styled, alpha } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

export const StyledCard = styled(Card)(({ theme, variant }) => ({
  borderRadius: variant === 'stat' ? 16 : 20,
  boxShadow: variant === 'stat' 
    ? '0 4px 12px rgba(0,0,0,0.05)' 
    : '0 8px 32px rgba(0,0,0,0.06)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  border: '1px solid rgba(0,0,0,0.04)',
  '&:hover': {
    transform: variant !== 'stat' ? 'translateY(-2px)' : 'translateY(-4px)',
    boxShadow: variant !== 'stat' 
      ? '0 12px 40px rgba(0,37,221,0.08)' 
      : '0 8px 24px rgba(0,0,0,0.1)',
  },
}));

export const GradientCard = styled(Box)(({ theme, gradient }) => ({
  background: gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: 20,
  padding: theme.spacing(3),
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
    zIndex: 0,
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  }
}));

export const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 280,
  backgroundColor: '#FFFFFF',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  borderRight: '1px solid rgba(0,0,0,0.08)',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  overflowY: 'auto',
  overflowX: 'hidden',
  zIndex: 1100,
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderRadius: '3px',
  },
  [theme.breakpoints.down('md')]: {
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
    '&.open': {
      transform: 'translateX(0)',
    },
  },
}));

export const MainContent = styled(Box)(({ theme }) => ({
  marginLeft: 280,
  minHeight: '100vh',
  backgroundColor: '#F8FAFC',
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
  },
}));

export const StatusChip = styled(Chip)(({ status, theme }) => {
  const statusStyles = {
    active: { bg: alpha('#10B981', 0.1), color: '#065F46', border: '1px solid rgba(16, 185, 129, 0.2)' },
    completed: { bg: alpha('#10B981', 0.1), color: '#065F46', border: '1px solid rgba(16, 185, 129, 0.2)' },
    approved: { bg: alpha('#10B981', 0.1), color: '#065F46', border: '1px solid rgba(16, 185, 129, 0.2)' },
    resolved: { bg: alpha('#10B981', 0.1), color: '#065F46', border: '1px solid rgba(16, 185, 129, 0.2)' },
    pending: { bg: alpha('#F59E0B', 0.1), color: '#92400E', border: '1px solid rgba(245, 158, 11, 0.2)' },
    investigating: { bg: alpha('#6366F1', 0.1), color: '#3730A3', border: '1px solid rgba(99, 102, 241, 0.2)' },
    escalated: { bg: alpha('#EF4444', 0.1), color: '#991B1B', border: '1px solid rgba(239, 68, 68, 0.2)' },
    inactive: { bg: alpha('#6B7280', 0.1), color: '#374151', border: '1px solid rgba(107, 114, 128, 0.2)' },
    cancelled: { bg: alpha('#EF4444', 0.1), color: '#991B1B', border: '1px solid rgba(239, 68, 68, 0.2)' },
    rejected: { bg: alpha('#EF4444', 0.1), color: '#991B1B', border: '1px solid rgba(239, 68, 68, 0.2)' },
    suspended: { bg: alpha('#EF4444', 0.1), color: '#991B1B', border: '1px solid rgba(239, 68, 68, 0.2)' },
  };
  
  const style = statusStyles[status?.toLowerCase()] || { bg: alpha('#6B7280', 0.1), color: '#374151' };
  
  return {
    backgroundColor: style.bg,
    color: style.color,
    fontWeight: 600,
    fontSize: '0.7rem',
    height: 24,
    borderRadius: '8px',
    border: style.border,
    '& .MuiChip-label': {
      px: 1,
      textTransform: 'capitalize',
    }
  };
});

export const SearchBar = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    transition: 'all 0.2s ease',
    fontSize: '0.875rem',
    '& fieldset': {
      borderColor: 'rgba(0,0,0,0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0,37,221,0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0025DD',
      borderWidth: '2px',
    },
  },
}));

export const ActionButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: 12,
  padding: variant === 'small' ? '6px 12px' : '8px 20px',
  fontWeight: 600,
  textTransform: 'none',
  gap: 6,
  fontSize: '0.8rem',
  '&:hover': {
    transform: 'translateY(-1px)',
  },
}));

export const DashboardCard = styled(Paper)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
  border: '1px solid rgba(0,0,0,0.06)',
  overflow: 'hidden',
  transition: 'all 0.2s ease',
  '&:hover': {
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  },
}));