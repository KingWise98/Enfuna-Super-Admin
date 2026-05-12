import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import DataTable from '../common/DataTable';
import { StatusChip } from '../../styles/styledComponents';
import { formatCurrency } from '../../utils/helpers';

const WalletsTab = ({ wallets, onViewDetails }) => {
  const columns = [
    { key: 'rider_name', label: 'Rider', render: (w) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar sx={{ width: { xs: 24, sm: 28 }, height: { xs: 24, sm: 28 }, bgcolor: '#06B6D4', fontSize: '0.7rem' }}>
          {w.rider_name?.charAt(0)}
        </Avatar>
        <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
          {w.rider_name}
        </Typography>
      </Box>
    )},
    { key: 'balance', label: 'Balance', render: (w) => (
      <Typography variant="body2" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        UGX {formatCurrency(w.balance)}
      </Typography>
    )},
    { key: 'available_balance', label: 'Available', render: (w) => (
      <Typography variant="body2" fontWeight="bold" color="#10B981" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        UGX {formatCurrency(w.available_balance)}
      </Typography>
    )},
    { key: 'reserved_balance', label: 'Reserved', render: (w) => (
      <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        UGX {formatCurrency(w.reserved_balance)}
      </Typography>
    )},
    { key: 'total_deposits', label: 'Total Deposits', render: (w) => (
      <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        UGX {formatCurrency(w.total_deposits)}
      </Typography>
    )},
    { key: 'is_active', label: 'Status', render: (w) => (
      <StatusChip status={w.is_active ? 'active' : 'inactive'} label={w.is_active ? 'Active' : 'Inactive'} />
    )},
  ];

  return (
    <DataTable
      title="💳 Wallet Management"
      data={wallets}
      type="wallet"
      columns={columns}
      showStatusFilter
      onViewDetails={onViewDetails}
    />
  );
};

export default WalletsTab;