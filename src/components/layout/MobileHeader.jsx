import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import MenuIcon from '@mui/icons-material/Menu';
import MotorcycleIcon from '@mui/icons-material/TwoWheeler';
import RefreshIcon from '@mui/icons-material/Refresh';

const MobileHeader = ({ onMenuClick, onRefresh, refreshing }) => {
  return (
    <Box sx={{ 
      p: { xs: 1.5, sm: 2 }, 
      bgcolor: 'white', 
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      position: 'sticky', 
      top: 0, 
      zIndex: 100,
    }}>
      <IconButton onClick={onMenuClick}>
        <MenuIcon />
      </IconButton>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <MotorcycleIcon sx={{ color: '#0025DD' }} />
        <Typography variant="h6" fontWeight="bold" color="#0025DD" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
          Enfuna
        </Typography>
      </Box>
      <IconButton onClick={onRefresh} disabled={refreshing}>
        {refreshing ? <CircularProgress size={20} /> : <RefreshIcon />}
      </IconButton>
    </Box>
  );
};

export default MobileHeader;