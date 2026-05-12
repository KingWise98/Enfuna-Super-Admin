import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { alpha } from '@mui/material/styles';

import { SidebarContainer, GradientCard, ActionButton } from '../../styles/styledComponents';
import { SIDEBAR_ITEMS, ROLE_PERMISSIONS } from '../../utils/constants';

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import MotorcycleIcon from '@mui/icons-material/TwoWheeler';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptIcon from '@mui/icons-material/Receipt';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ContactsIcon from '@mui/icons-material/Contacts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BarChartIcon from '@mui/icons-material/BarChart';
import PaymentIcon from '@mui/icons-material/Payment';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';

const iconMap = {
  DashboardIcon: DashboardIcon,
  MotorcycleIcon: MotorcycleIcon,
  DirectionsBikeIcon: DirectionsBikeIcon,
  LocalShippingIcon: LocalShippingIcon,
  ReceiptIcon: ReceiptIcon,
  GroupsIcon: GroupsIcon,
  AccountBalanceIcon: AccountBalanceIcon,
  ContactsIcon: ContactsIcon,
  PersonAddIcon: PersonAddIcon,
  SupportAgentIcon: SupportAgentIcon,
  BarChartIcon: BarChartIcon,
  PaymentIcon: PaymentIcon,
};

const Sidebar = ({ 
  activeTab, 
  onTabChange, 
  currentUserRole, 
  userPermissions, 
  onRoleSwitch,
  user,
  riders,
  trips,
  deliveries,
  expenses,
  groups,
  wallets,
  contacts,
  agents,
  agentApplications,
  disputes,
  withdrawals,
  isMobile,
  onCloseMobile 
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const getBadgeCount = (item) => {
    switch (item.tab) {
      case 1: return riders?.length || 0;
      case 2: return trips?.length || 0;
      case 3: return deliveries?.length || 0;
      case 4: return expenses?.filter(e => e.status === 'pending').length || 0;
      case 5: return groups?.length || 0;
      case 6: return wallets?.length || 0;
      case 7: return contacts?.length || 0;
      case 8: return (agents?.length || 0) + (agentApplications?.length || 0);
      case 9: return disputes?.filter(d => d.status !== 'resolved').length || 0;
      case 11: return withdrawals?.filter(w => w.status === 'pending').length || 0;
      default: return 0;
    }
  };

  const hasPermission = (permission) => {
    return userPermissions[permission] === true;
  };

  const handleItemClick = (tab) => {
    onTabChange(tab);
    if (isMobile && onCloseMobile) {
      onCloseMobile();
    }
  };

  const sidebarContent = (
    <>
      <GradientCard gradient="linear-gradient(135deg, #0025DD 0%, #4F46E5 100%)" sx={{ borderRadius: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <MotorcycleIcon sx={{ fontSize: 28 }} />
          <Typography variant="h5" fontWeight="bold">
            Enfuna
          </Typography>
        </Box>
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.7rem' }}>
          System Admin
        </Typography>
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', display: 'block', mt: 0.5 }}>
          🇺🇬 Kampala, Uganda
        </Typography>
      </GradientCard>
      
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Avatar 
          sx={{ 
            bgcolor: '#0025DD', 
            width: 40, 
            height: 40,
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          {user?.full_names?.charAt(0) || 'A'}
        </Avatar>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="body2" fontWeight="bold" noWrap>
            {user?.full_names}
          </Typography>
          <Typography variant="caption" color="text.secondary" noWrap>
            {currentUserRole?.replace('_', ' ').toUpperCase()}
          </Typography>
        </Box>
        <Tooltip title="Switch Role (Demo)">
          <IconButton size="small" onClick={onRoleSwitch}>
            <AdminPanelSettingsIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      
      <Divider />
      
      <List sx={{ flex: 1, px: 1, py: 2 }}>
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = activeTab === item.tab;
          if (item.permission && !hasPermission(item.permission)) return null;
          
          const IconComponent = iconMap[item.icon];
          const badgeCount = getBadgeCount(item);
          
          return (
            <ListItem 
              key={item.tab}
              onClick={() => handleItemClick(item.tab)}
              sx={{ 
                borderRadius: 2, 
                mb: 0.5,
                cursor: 'pointer',
                bgcolor: isActive ? alpha('#0025DD', 0.08) : 'transparent',
                borderLeft: isActive ? '3px solid #0025DD' : '3px solid transparent',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: alpha('#0025DD', 0.04),
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <IconComponent sx={{ 
                  color: isActive ? '#0025DD' : '#64748B',
                  fontSize: 20,
                  transition: 'color 0.2s'
                }} />
              </ListItemIcon>
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ 
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#0025DD' : '#334155',
                  fontSize: '0.85rem',
                }}
              />
              {badgeCount > 0 && (
                <Box
                  sx={{
                    bgcolor: isActive ? '#0025DD' : '#EF4444',
                    color: 'white',
                    borderRadius: '50%',
                    width: 22,
                    height: 22,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                  }}
                >
                  {badgeCount > 99 ? '99+' : badgeCount}
                </Box>
              )}
            </ListItem>
          );
        })}
      </List>
      
      <Box sx={{ p: 2, borderTop: '1px solid rgba(0,0,0,0.08)', bgcolor: '#F8FAFC' }}>
        <ActionButton
          fullWidth
          variant="outlined"
          color="error"
          startIcon={<LogoutIcon />}
          sx={{ borderColor: '#DC2626', color: '#DC2626' }}
        >
          Logout
        </ActionButton>
      </Box>
    </>
  );

  if (isMobile) {
    return sidebarContent;
  }

  return <SidebarContainer>{sidebarContent}</SidebarContainer>;
};

export default Sidebar;