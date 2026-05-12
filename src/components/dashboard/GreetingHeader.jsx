import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import NotificationsIcon from '@mui/icons-material/Notifications';
import RefreshIcon from '@mui/icons-material/Refresh';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { GradientCard, ActionButton } from '../../styles/styledComponents';
import { getDynamicGreeting } from '../../utils/helpers';

const GreetingHeader = ({ user, onRefresh, refreshing, isMobile }) => {
  const greeting = getDynamicGreeting();

  return (
    <GradientCard 
      gradient={greeting.isHoliday 
        ? `linear-gradient(135deg, ${greeting.color} 0%, ${greeting.color}cc 100%)`
        : 'linear-gradient(135deg, #0025DD 0%, #4F46E5 100%)'
      }
      sx={{ mb: { xs: 2, sm: 3 }, p: { xs: 2, sm: 3 } }}
    >
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'flex-start', sm: 'center' }, 
        justifyContent: 'space-between', 
        gap: 2 
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2 }, flexWrap: 'wrap' }}>
          {greeting.icon && (
            <Box sx={{ 
              bgcolor: 'rgba(255,255,255,0.2)', 
              borderRadius: '50%', 
              width: { xs: 48, sm: 56 }, 
              height: { xs: 48, sm: 56 }, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexShrink: 0
            }}>
              {greeting.icon === 'WbSunnyIcon' ? 
                <WbSunnyIcon sx={{ fontSize: { xs: 24, sm: 28 } }} /> : 
                <NightsStayIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
              }
            </Box>
          )}
          <Box>
            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
              {greeting.text}, {user?.full_names?.split(' ')[0]}!
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
              {new Date().toLocaleDateString('en-UG', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                timeZone: 'Africa/Kampala'
              })}
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', mt: 0.5, display: 'block', fontSize: { xs: '0.6rem', sm: '0.65rem' } }}>
              Enfuna Rider System Admin Dashboard • Kampala, Uganda 🇺🇬
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1, alignSelf: { xs: 'flex-end', sm: 'center' } }}>
          <ActionButton
            variant="contained"
            startIcon={refreshing ? <CircularProgress size={18} color="inherit" /> : <RefreshIcon />}
            onClick={onRefresh}
            disabled={refreshing}
            sx={{ 
              bgcolor: 'rgba(255,255,255,0.2)', 
              color: 'white', 
              '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
              fontSize: { xs: '0.7rem', sm: '0.8rem' },
              px: { xs: 1.5, sm: 2 }
            }}
          >
            {refreshing ? 'Refreshing...' : 'Refresh'}
          </ActionButton>
          <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.15)' }}>
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Box>
    </GradientCard>
  );
};

export default GreetingHeader;