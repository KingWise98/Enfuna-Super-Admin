import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { SIDEBAR_ITEMS } from '../../utils/constants';

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

const MobileTabNavigation = ({ activeTab, onTabChange, userPermissions }) => {
  const hasPermission = (permission) => {
    return userPermissions[permission] === true;
  };

  const filteredItems = SIDEBAR_ITEMS.filter(item => 
    !item.permission || hasPermission(item.permission)
  );

  return (
    <Paper sx={{ borderRadius: 0, position: 'sticky', top: 56, zIndex: 99 }}>
      <Tabs 
        value={activeTab} 
        onChange={(e, v) => onTabChange(v)} 
        variant="scrollable" 
        scrollButtons="auto"
        sx={{ 
          bgcolor: 'white', 
          borderBottom: '1px solid rgba(0,0,0,0.08)', 
          '& .MuiTab-root': { 
            minHeight: { xs: 44, sm: 48 }, 
            textTransform: 'none', 
            fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' },
            px: { xs: 1, sm: 1.5 }
          } 
        }}
      >
        {filteredItems.map(item => {
          const IconComponent = iconMap[item.icon];
          return (
            <Tab 
              key={item.tab} 
              label={item.label} 
              icon={<IconComponent sx={{ fontSize: { xs: 14, sm: 16 } }} />} 
              iconPosition="start" 
            />
          );
        })}
      </Tabs>
    </Paper>
  );
};

export default MobileTabNavigation;