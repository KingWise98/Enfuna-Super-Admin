import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { alpha } from '@mui/material/styles';
import DataTable from '../common/DataTable';
import { StatusChip } from '../../styles/styledComponents';
import { formatCurrency } from '../../utils/helpers';

const GroupsTab = ({ groups, onViewDetails, onBlockUser, onDeleteUser, hasPermission }) => {
  const columns = [
    { key: 'name', label: 'Group Name', render: (g) => (
      <Box>
        <Typography variant="body2" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
          {g.name}
        </Typography>
        <Typography variant="caption" color="text.secondary">{g.group_type}</Typography>
      </Box>
    )},
    { key: 'admin_rider', label: 'Admin' },
    { key: 'member_count', label: 'Members', render: (g) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <LinearProgress 
          variant="determinate" 
          value={(g.member_count / g.max_members) * 100} 
          sx={{ height: 6, borderRadius: 3, bgcolor: alpha('#8B5CF6', 0.1), '& .MuiLinearProgress-bar': { bgcolor: '#8B5CF6' }, width: { xs: 50, sm: 80 } }}
        />
        <Typography variant="caption">{g.member_count}/{g.max_members}</Typography>
      </Box>
    )},
    { key: 'contrib_amount', label: 'Contribution', render: (g) => (
      <Box>
        <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
          UGX {formatCurrency(g.contrib_amount)}
        </Typography>
        <Typography variant="caption" color="text.secondary">{g.contrib_frequency}</Typography>
      </Box>
    )},
    { key: 'total_pool', label: 'Total Pool', render: (g) => (
      <Typography variant="body2" fontWeight="bold" color="#8B5CF6" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        UGX {formatCurrency(g.total_pool)}
      </Typography>
    )},
    { key: 'status', label: 'Status', render: (g) => <StatusChip status={g.status} label={g.status} /> },
  ];

  return (
    <DataTable
      title="👥 Savings Groups"
      data={groups}
      type="group"
      columns={columns}
      showStatusFilter
      onViewDetails={onViewDetails}
      onBlockUser={onBlockUser}
      onDeleteUser={onDeleteUser}
      hasPermission={hasPermission}
    />
  );
};

export default GroupsTab;