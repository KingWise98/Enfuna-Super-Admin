import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import DataTable from '../common/DataTable';
import { StatusChip } from '../../styles/styledComponents';
import { formatCurrency } from '../../utils/helpers';

const WithdrawalsTab = ({ withdrawals, onViewDetails }) => {
  const columns = [
    { key: 'id', label: 'Request ID', render: (w) => (
      <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        {w.id}
      </Typography>
    )},
    { key: 'rider_name', label: 'Rider' },
    { key: 'amount', label: 'Amount', render: (w) => (
      <Typography variant="body2" fontWeight="bold" color="#0025DD" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        UGX {formatCurrency(w.amount)}
      </Typography>
    )},
    { key: 'payment_method', label: 'Method', render: (w) => (
      <Chip label={w.payment_method?.replace('_', ' ')} size="small" sx={{ textTransform: 'capitalize' }} />
    )},
    { key: 'phone_number', label: 'Phone' },
    { key: 'created_at', label: 'Requested', render: (w) => (
      <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        {new Date(w.created_at).toLocaleDateString('en-UG')}
      </Typography>
    )},
    { key: 'status', label: 'Status', render: (w) => <StatusChip status={w.status} label={w.status} /> },
  ];

  return (
    <DataTable
      title="🏦 Withdrawal Requests"
      data={withdrawals}
      type="withdrawal"
      columns={columns}
      showStatusFilter
      onViewDetails={onViewDetails}
    />
  );
};

export default WithdrawalsTab;