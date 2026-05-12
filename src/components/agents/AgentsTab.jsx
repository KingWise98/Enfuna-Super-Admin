import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { alpha } from '@mui/material/styles';

import { StyledCard, ActionButton } from '../../styles/styledComponents';
import DataTable from '../common/DataTable';
import CommissionDialog from './CommissionDialog';
import { formatCurrency } from '../../utils/helpers';
import { StatusChip } from '../../styles/styledComponents';

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';

const AgentsTab = ({ 
  agents, 
  agentApplications, 
  onViewDetails, 
  onRemoveAgent,
  onAdjustCommission,
  onApproveAgent,
  onDenyAgent,
  hasPermission 
}) => {
  const [adjustCommissionDialog, setAdjustCommissionDialog] = useState({ open: false, agent: null });

  const handleAdjustCommission = (agent) => {
    setAdjustCommissionDialog({ open: true, agent });
  };

  const handleSaveCommission = (agent, newRate) => {
    onAdjustCommission(agent, newRate);
    setAdjustCommissionDialog({ open: false, agent: null });
  };

  const columns = [
    { key: 'rider_name', label: 'Agent', render: (a) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar sx={{ width: 28, height: 28, bgcolor: '#6366F1', fontSize: '0.8rem' }}>
          {a.rider_name?.charAt(0)}
        </Avatar>
        <Box>
          <Typography variant="body2" fontWeight="bold">{a.rider_name}</Typography>
          <Chip label={a.tier} size="small" sx={{ height: 18, fontSize: '0.6rem', bgcolor: alpha('#6366F1', 0.1), color: '#6366F1' }} />
        </Box>
      </Box>
    )},
    { key: 'referral_code', label: 'Referral Code' },
    { key: 'total_referrals', label: 'Referrals' },
    { key: 'total_commission', label: 'Total Commission', render: (a) => `UGX ${formatCurrency(a.total_commission)}` },
    { key: 'commission_rate', label: 'Commission Rate', render: (a) => `${a.commission_rate}%` },
    { key: 'region', label: 'Region' },
    { key: 'is_active', label: 'Status', render: (a) => <StatusChip status={a.is_active ? 'active' : 'inactive'} label={a.is_active ? 'Active' : 'Inactive'} /> },
  ];

  return (
    <Box sx={{ p: { xs: 1.5, sm: 2, md: 3 } }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: '#1E293B' }}>
        Agent Management
      </Typography>
      
      {/* Pending Applications */}
      {agentApplications.length > 0 && hasPermission.canManageAgents && (
        <StyledCard sx={{ mb: 3 }}>
          <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.06)', bgcolor: alpha('#F59E0B', 0.05) }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PersonAddIcon sx={{ color: '#F59E0B' }} />
              <Typography variant="h6" fontWeight="bold">Pending Agent Applications ({agentApplications.length})</Typography>
            </Box>
          </Box>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: '#F8FAFC' }}>
                  <TableCell>Rider Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Experience</TableCell>
                  <TableCell>Applied On</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {agentApplications.map((app) => (
                  <TableRow key={app.id} hover>
                    <TableCell>
                      <Typography variant="body2" fontWeight="bold">{app.rider_name}</Typography>
                    </TableCell>
                    <TableCell>{app.email}</TableCell>
                    <TableCell>{app.phone}</TableCell>
                    <TableCell>{app.experience}</TableCell>
                    <TableCell>{new Date(app.applied_at).toLocaleDateString()}</TableCell>
                    <TableCell align="center">
                      <Stack direction="row" spacing={1} justifyContent="center">
                        <ActionButton
                          size="small"
                          variant="contained"
                          startIcon={<CheckIcon />}
                          onClick={() => onApproveAgent(app)}
                          sx={{ bgcolor: '#10B981' }}
                        >
                          Approve
                        </ActionButton>
                        <ActionButton
                          size="small"
                          variant="outlined"
                          startIcon={<CloseIcon />}
                          onClick={() => onDenyAgent(app)}
                          sx={{ borderColor: '#EF4444', color: '#EF4444' }}
                        >
                          Deny
                        </ActionButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledCard>
      )}
      
      {/* Active Agents Table */}
      <DataTable
        title="Active Agents"
        data={agents.filter(a => a.status === 'approved')}
        type="agent"
        columns={columns}
        showStatusFilter
        onViewDetails={onViewDetails}
        extraButtons={hasPermission.canManageAgents && (
          <ActionButton
            variant="outlined"
            startIcon={<SettingsIcon />}
            onClick={() => console.log('Settings clicked')}
          >
            Settings
          </ActionButton>
        )}
      />

      <CommissionDialog
        open={adjustCommissionDialog.open}
        agent={adjustCommissionDialog.agent}
        onClose={() => setAdjustCommissionDialog({ open: false, agent: null })}
        onSave={handleSaveCommission}
      />
    </Box>
  );
};

export default AgentsTab;