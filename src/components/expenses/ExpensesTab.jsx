import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { alpha } from '@mui/material/styles';
import DataTable from '../common/DataTable';
import { StatusChip } from '../../styles/styledComponents';
import { formatCurrency } from '../../utils/helpers';

const ExpensesTab = ({ expenses, onViewDetails }) => {
  const columns = [
    { key: 'id', label: 'Expense ID', render: (e) => (
      <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#EF4444', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        {e.id}
      </Typography>
    )},
    { key: 'rider_name', label: 'Rider' },
    { key: 'category', label: 'Category', render: (e) => (
      <Chip label={e.category} size="small" sx={{ bgcolor: alpha('#F59E0B', 0.1), color: '#92400E' }} />
    )},
    { key: 'amount', label: 'Amount', render: (e) => (
      <Typography variant="body2" fontWeight="bold" color="#EF4444" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        UGX {formatCurrency(e.amount)}
      </Typography>
    )},
    { key: 'description', label: 'Description', render: (e) => (
      <Typography variant="body2" sx={{ maxWidth: { xs: 100, sm: 150, md: 200 }, overflow: 'hidden', textOverflow: 'ellipsis', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        {e.description || 'N/A'}
      </Typography>
    )},
    { key: 'status', label: 'Status', render: (e) => <StatusChip status={e.status} label={e.status} /> },
  ];

  return (
    <DataTable
      title="💰 Expenses Management"
      data={expenses}
      type="expense"
      columns={columns}
      showStatusFilter
      onViewDetails={onViewDetails}
    />
  );
};

export default ExpensesTab;