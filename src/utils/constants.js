// Uganda Public Holidays 2024
export const UGANDA_HOLIDAYS = [
  { month: 1, day: 1, name: "New Year's Day", icon: 'StarsIcon', color: '#FFD700' },
  { month: 1, day: 26, name: "NRM Liberation Day", icon: 'FlagIcon', color: '#C8102E' },
  { month: 2, day: 16, name: "Archbishop Janani Luwum Day", icon: 'ChurchIcon', color: '#800080' },
  { month: 3, day: 8, name: "International Women's Day", icon: 'CelebrationIcon', color: '#FF69B4' },
  { month: 5, day: 1, name: "Labour Day", icon: 'CelebrationIcon', color: '#FF4500' },
  { month: 6, day: 3, name: "Uganda Martyrs' Day", icon: 'ChurchIcon', color: '#8B0000' },
  { month: 6, day: 9, name: "National Heroes' Day", icon: 'FlagIcon', color: '#FFD700' },
  { month: 10, day: 9, name: "Independence Day", icon: 'FlagIcon', color: '#000000' },
  { month: 12, day: 25, name: "Christmas Day", icon: 'StarsIcon', color: '#FF0000' },
  { month: 12, day: 26, name: "Boxing Day", icon: 'CelebrationIcon', color: '#FFD700' },
];

// Chart Data for Analytics
export const WEEKLY_TRIPS_DATA = [
  { name: 'Mon', trips: 145, revenue: 2175000, deliveries: 32 },
  { name: 'Tue', trips: 167, revenue: 2505000, deliveries: 38 },
  { name: 'Wed', trips: 189, revenue: 2835000, deliveries: 41 },
  { name: 'Thu', trips: 156, revenue: 2340000, deliveries: 35 },
  { name: 'Fri', trips: 178, revenue: 2670000, deliveries: 44 },
  { name: 'Sat', trips: 210, revenue: 3150000, deliveries: 52 },
  { name: 'Sun', trips: 134, revenue: 2010000, deliveries: 28 },
];

export const MONTHLY_REVENUE_DATA = [
  { name: 'Jan', revenue: 18500000, expenses: 3200000, profit: 15300000 },
  { name: 'Feb', revenue: 19200000, expenses: 3450000, profit: 15750000 },
  { name: 'Mar', revenue: 21000000, expenses: 3800000, profit: 17200000 },
  { name: 'Apr', revenue: 19800000, expenses: 3600000, profit: 16200000 },
  { name: 'May', revenue: 20500000, expenses: 3750000, profit: 16750000 },
  { name: 'Jun', revenue: 21500000, expenses: 3900000, profit: 17600000 },
];

export const STATUS_DISTRIBUTION = [
  { name: 'Active', value: 980, color: '#10B981' },
  { name: 'Inactive', value: 120, color: '#6B7280' },
  { name: 'Pending', value: 150, color: '#F59E0B' },
  { name: 'Suspended', value: 35, color: '#EF4444' },
];

export const PAYMENT_METHODS_DATA = [
  { name: 'Mobile Money', value: 65, color: '#0025DD' },
  { name: 'Cash', value: 25, color: '#10B981' },
  { name: 'Wallet', value: 10, color: '#8B5CF6' },
];

export const DISPUTE_STATUS_DATA = [
  { name: 'Pending', value: 15, color: '#F59E0B' },
  { name: 'Investigating', value: 8, color: '#6366F1' },
  { name: 'Resolved', value: 22, color: '#10B981' },
  { name: 'Escalated', value: 5, color: '#EF4444' },
];

export const AGENT_PERFORMANCE_DATA = [
  { name: 'John M.', referrals: 45, commission: 2250000 },
  { name: 'Grace N.', referrals: 67, commission: 3350000 },
  { name: 'Aisha N.', referrals: 89, commission: 4450000 },
];

// Permission mappings
export const ROLE_PERMISSIONS = {
  super_admin: {
    canManageAgents: true,
    canManageDisputes: true,
    canViewAnalytics: true,
    canManageRiders: true,
    canManageTrips: true,
    canManageGroups: true,
    canManageWallets: true,
    canManageContacts: true,
    canManageExpenses: true,
  },
  admin: {
    canManageAgents: true,
    canManageDisputes: true,
    canViewAnalytics: true,
    canManageRiders: true,
    canManageTrips: true,
    canManageGroups: true,
    canManageWallets: true,
    canManageContacts: true,
    canManageExpenses: false,
  },
  agent: {
    canManageAgents: false,
    canManageDisputes: true,
    canViewAnalytics: false,
    canManageRiders: false,
    canManageTrips: false,
    canManageGroups: false,
    canManageWallets: true,
    canManageContacts: true,
    canManageExpenses: false,
  },
  viewer: {
    canManageAgents: false,
    canManageDisputes: false,
    canViewAnalytics: true,
    canManageRiders: false,
    canManageTrips: false,
    canManageGroups: false,
    canManageWallets: false,
    canManageContacts: false,
    canManageExpenses: false,
  },
};

// Sidebar Navigation Items
export const SIDEBAR_ITEMS = [
  { label: 'Dashboard', icon: 'DashboardIcon', tab: 0 },
  { label: 'Riders', icon: 'MotorcycleIcon', tab: 1, permission: 'canManageRiders' },
  { label: 'Trips', icon: 'DirectionsBikeIcon', tab: 2, permission: 'canManageTrips' },
  { label: 'Deliveries', icon: 'LocalShippingIcon', tab: 3, permission: 'canManageTrips' },
  { label: 'Expenses', icon: 'ReceiptIcon', tab: 4, permission: 'canManageExpenses' },
  { label: 'Groups', icon: 'GroupsIcon', tab: 5, permission: 'canManageGroups' },
  { label: 'Wallets', icon: 'AccountBalanceIcon', tab: 6, permission: 'canManageWallets' },
  { label: 'Contacts', icon: 'ContactsIcon', tab: 7, permission: 'canManageContacts' },
  { label: 'Agents', icon: 'PersonAddIcon', tab: 8, permission: 'canManageAgents' },
  { label: 'Disputes', icon: 'SupportAgentIcon', tab: 9, permission: 'canManageDisputes' },
  { label: 'Analytics', icon: 'BarChartIcon', tab: 10, permission: 'canViewAnalytics' },
  { label: 'Withdrawals', icon: 'PaymentIcon', tab: 11, permission: 'canManageWallets' },
];