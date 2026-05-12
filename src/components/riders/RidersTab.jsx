import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import MotorcycleIcon from '@mui/icons-material/TwoWheeler';
import DataTable from '../common/DataTable';
import { StatusChip } from '../../styles/styledComponents';
import { formatCurrency } from '../../utils/helpers';

const RidersTab = ({ riders, onViewDetails, onBlockUser, onDeleteUser, hasPermission }) => {
  const columns = [
    { key: 'full_names', label: 'Rider', render: (r) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Avatar sx={{ width: { xs: 28, sm: 32 }, height: { xs: 28, sm: 32 }, bgcolor: '#0025DD', fontSize: '0.8rem', fontWeight: 'bold' }}>
          {r.full_names?.charAt(0)}
        </Avatar>
        <Box>
          <Typography variant="body2" fontWeight="bold" noWrap sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
            {r.full_names}
          </Typography>
          <Typography variant="caption" color="text.secondary">{r.rider_type?.replace('_', ' ')}</Typography>
        </Box>
      </Box>
    )},
    { key: 'phone_number', label: 'Phone' },
    { key: 'stage', label: 'Stage', render: (r) => r.stage || 'N/A' },
    { key: 'motorcycle_model', label: 'Motorcycle', render: (r) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <MotorcycleIcon sx={{ fontSize: 16, color: '#64748B' }} />
        <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
          {r.motorcycle_model}
        </Typography>
      </Box>
    )},
    { key: 'total_trips', label: 'Trips', render: (r) => (
      <Typography variant="body2" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        {r.total_trips?.toLocaleString()}
      </Typography>
    )},
    { key: 'total_earnings', label: 'Earnings', render: (r) => (
      <Typography variant="body2" fontWeight="bold" color="#10B981" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        UGX {formatCurrency(r.total_earnings)}
      </Typography>
    )},
    { key: 'rating', label: 'Rating', render: (r) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <StarIcon sx={{ fontSize: 14, color: '#F59E0B' }} />
        <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
          {r.rating || '0.0'}
        </Typography>
      </Box>
    )},
    { key: 'status', label: 'Status', render: (r) => <StatusChip status={r.status} label={r.status} /> },
  ];

  return (
    <DataTable
      title="🇺🇬 Riders Management - Boda Boda"
      data={riders}
      type="rider"
      columns={columns}
      showStatusFilter
      onViewDetails={onViewDetails}
      onBlockUser={onBlockUser}
      onDeleteUser={onDeleteUser}
      hasPermission={hasPermission}
    />
  );
};

export default RidersTab;