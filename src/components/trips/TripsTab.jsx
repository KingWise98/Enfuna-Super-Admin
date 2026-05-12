import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { alpha } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DataTable from '../common/DataTable';
import { StatusChip } from '../../styles/styledComponents';
import { formatCurrency } from '../../utils/helpers';

const TripsTab = ({ trips, onViewDetails }) => {
  const columns = [
    { key: 'id', label: 'Trip ID', render: (t) => (
      <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#0025DD', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        {t.id}
      </Typography>
    )},
    { key: 'rider_name', label: 'Rider' },
    { key: 'pickup_location', label: 'Pickup', render: (t) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <LocationOnIcon sx={{ fontSize: 14, color: '#0025DD' }} />
        <Typography variant="body2" sx={{ 
          maxWidth: { xs: 80, sm: 120, md: 150 }, 
          overflow: 'hidden', 
          textOverflow: 'ellipsis', 
          whiteSpace: 'nowrap',
          fontSize: { xs: '0.7rem', sm: '0.8rem' }
        }}>
          {t.pickup_location}
        </Typography>
      </Box>
    )},
    { key: 'destination', label: 'Destination', render: (t) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <LocationOnIcon sx={{ fontSize: 14, color: '#EF4444' }} />
        <Typography variant="body2" sx={{ 
          maxWidth: { xs: 80, sm: 120, md: 150 }, 
          overflow: 'hidden', 
          textOverflow: 'ellipsis', 
          whiteSpace: 'nowrap',
          fontSize: { xs: '0.7rem', sm: '0.8rem' }
        }}>
          {t.destination}
        </Typography>
      </Box>
    )},
    { key: 'trip_fare', label: 'Fare', render: (t) => (
      <Typography variant="body2" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        UGX {formatCurrency(t.trip_fare)}
      </Typography>
    )},
    { key: 'payment_method', label: 'Payment', render: (t) => (
      <Chip 
        label={t.payment_method?.replace('_', ' ')} 
        size="small" 
        sx={{ 
          fontSize: { xs: '0.6rem', sm: '0.7rem' }, 
          textTransform: 'capitalize',
          bgcolor: t.payment_method === 'mobile_money' ? alpha('#10B981', 0.1) : alpha('#6B7280', 0.1),
          color: t.payment_method === 'mobile_money' ? '#065F46' : '#374151',
        }} 
      />
    )},
    { key: 'status', label: 'Status', render: (t) => <StatusChip status={t.status} label={t.status} /> },
  ];

  return (
    <DataTable
      title="🏍️ Trips Management"
      data={trips}
      type="trip"
      columns={columns}
      showStatusFilter
      onViewDetails={onViewDetails}
    />
  );
};

export default TripsTab;