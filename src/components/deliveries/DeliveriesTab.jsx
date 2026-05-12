import Typography from '@mui/material/Typography';
import DataTable from '../common/DataTable';
import { StatusChip } from '../../styles/styledComponents';
import { formatCurrency } from '../../utils/helpers';

const DeliveriesTab = ({ deliveries, onViewDetails }) => {
  const columns = [
    { key: 'id', label: 'Delivery ID', render: (d) => (
      <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#0025DD', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        {d.id}
      </Typography>
    )},
    { key: 'rider_name', label: 'Rider' },
    { key: 'package_type', label: 'Package' },
    { key: 'pickup_location', label: 'From', render: (d) => (
      <Typography variant="body2" sx={{ maxWidth: { xs: 80, sm: 120, md: 150 }, overflow: 'hidden', textOverflow: 'ellipsis', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        {d.pickup_location}
      </Typography>
    )},
    { key: 'drop_off_location', label: 'To', render: (d) => (
      <Typography variant="body2" sx={{ maxWidth: { xs: 80, sm: 120, md: 150 }, overflow: 'hidden', textOverflow: 'ellipsis', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        {d.drop_off_location}
      </Typography>
    )},
    { key: 'delivery_fee', label: 'Fee', render: (d) => (
      <Typography variant="body2" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        UGX {formatCurrency(d.delivery_fee)}
      </Typography>
    )},
    { key: 'status', label: 'Status', render: (d) => <StatusChip status={d.status} label={d.status} /> },
  ];

  return (
    <DataTable
      title="📦 Deliveries Management"
      data={deliveries}
      type="delivery"
      columns={columns}
      showStatusFilter
      onViewDetails={onViewDetails}
    />
  );
};

export default DeliveriesTab;