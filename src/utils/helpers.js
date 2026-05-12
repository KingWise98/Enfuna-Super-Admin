export const formatCurrency = (amount) => {
  if (amount === null || amount === undefined) return '0';
  return amount.toLocaleString('en-UG');
};

export const getStatusColor = (status) => {
  const colors = {
    active: '#10B981',
    completed: '#10B981',
    approved: '#10B981',
    resolved: '#10B981',
    pending: '#F59E0B',
    investigating: '#6366F1',
    escalated: '#EF4444',
    inactive: '#6B7280',
    suspended: '#EF4444',
    cancelled: '#EF4444',
    rejected: '#EF4444',
  };
  return colors[status?.toLowerCase()] || '#6B7280';
};

export const getTypeColor = (type) => {
  const colors = {
    customer: '#0025DD',
    supplier: '#F59E0B',
    employee: '#10B981',
    savings: '#8B5CF6',
    welfare: '#EC4899',
    investment: '#06B6D4',
  };
  return colors[type] || '#64748B';
};

export const getDynamicGreeting = () => {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  
  const { UGANDA_HOLIDAYS } = require('./constants');
  const holiday = UGANDA_HOLIDAYS.find(h => h.month === month && h.day === day);
  
  if (holiday) {
    return {
      text: holiday.name,
      icon: holiday.icon,
      color: holiday.color || '#0025DD',
      isHoliday: true
    };
  }
  
  if (hour >= 5 && hour < 12) return { text: "Good Morning", icon: "WbSunnyIcon", color: '#F59E0B' };
  if (hour >= 12 && hour < 17) return { text: "Good Afternoon", icon: "WbSunnyIcon", color: '#F59E0B' };
  if (hour >= 17 && hour < 21) return { text: "Good Evening", icon: "NightsStayIcon", color: '#6366F1' };
  return { text: "Good Night", icon: "NightsStayIcon", color: '#4B5563' };
};

export const filterDataByDate = (data, dateFilter, dateField = 'created_at') => {
  if (!dateFilter.startDate) return data;
  return data.filter(item => {
    const itemDate = new Date(item[dateField]);
    return itemDate >= dateFilter.startDate && itemDate <= dateFilter.endDate;
  });
};