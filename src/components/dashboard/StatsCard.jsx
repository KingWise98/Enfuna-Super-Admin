import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { DashboardCard } from '../../styles/styledComponents';

// Icons
import MotorcycleIcon from '@mui/icons-material/TwoWheeler';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ContactsIcon from '@mui/icons-material/Contacts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const iconMap = {
  MotorcycleIcon,
  AccountBalanceWalletIcon,
  DirectionsBikeIcon,
  GroupsIcon,
  AccountBalanceIcon,
  ContactsIcon,
  PersonAddIcon,
  SupportAgentIcon,
};

const StatsCard = ({ stat }) => {
  const IconComponent = iconMap[stat.icon];

  return (
    <DashboardCard>
      <Box sx={{ 
        background: stat.gradient,
        p: { xs: 1.5, sm: 2, md: 2.5 },
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: -20,
          right: -20,
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
        }
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Box sx={{ flex: 1, mr: 1, minWidth: 0 }}>
            <Typography variant="caption" sx={{ 
              opacity: 0.9, 
              fontSize: { xs: '0.55rem', sm: '0.6rem', md: '0.65rem' }, 
              textTransform: 'uppercase', 
              letterSpacing: '0.5px',
              display: 'block'
            }}>
              {stat.label}
            </Typography>
            <Typography variant="h6" fontWeight="bold" sx={{ 
              mt: 0.5, 
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1.1rem' }, 
              lineHeight: 1.2,
              wordBreak: 'break-word'
            }}>
              {stat.value}
            </Typography>
          </Box>
          <IconComponent sx={{ fontSize: { xs: 24, sm: 28, md: 32 }, opacity: 0.9, flexShrink: 0 }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
          <Typography variant="caption" sx={{ 
            opacity: 0.85, 
            fontSize: { xs: '0.55rem', sm: '0.6rem', md: '0.65rem' },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            {stat.subValue}
          </Typography>
          {stat.change && (
            <Chip
              label={stat.change}
              size="small"
              sx={{
                height: 18,
                fontSize: '0.6rem',
                bgcolor: stat.changeType === 'up' ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)',
                color: 'white',
                flexShrink: 0,
              }}
              icon={stat.changeType === 'up' ? <TrendingUpIcon sx={{ fontSize: 12 }} /> : <TrendingDownIcon sx={{ fontSize: 12 }} />}
            />
          )}
        </Box>
      </Box>
    </DashboardCard>
  );
};

export default StatsCard;