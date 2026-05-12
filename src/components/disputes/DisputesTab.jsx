import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { DashboardCard, StatusChip } from '../../styles/styledComponents';
import DataTable from '../common/DataTable';
import DisputeChatDialog from './DisputeChatDialog';
import { alpha } from '@mui/material/styles';

const DisputesTab = ({ 
  disputes, 
  onViewDetails, 
  onResolveDispute, 
  onUpdateStatus,
  onSendChatMessage,
  user,
  hasPermission,
  isMobile
}) => {
  const [selectedDispute, setSelectedDispute] = useState(null);
  const [disputeChatOpen, setDisputeChatOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const handleOpenChat = (dispute) => {
    setSelectedDispute(dispute);
    setDisputeChatOpen(true);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedDispute) return;
    onSendChatMessage(selectedDispute, newMessage, user);
    setNewMessage('');
  };

  const columns = [
    { key: 'ticket_number', label: 'Ticket #', render: (d) => (
      <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#0025DD' }}>
        {d.ticket_number}
      </Typography>
    )},
    { key: 'title', label: 'Title', render: (d) => (
      <Typography variant="body2" sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {d.title}
      </Typography>
    )},
    { key: 'rider_name', label: 'Rider' },
    { key: 'customer_name', label: 'Customer' },
    { key: 'category', label: 'Category', render: (d) => <StatusChip status={d.category} label={d.category} size="small" /> },
    { key: 'priority', label: 'Priority', render: (d) => (
      <StatusChip 
        status={d.priority} 
        label={d.priority} 
        sx={{ 
          bgcolor: d.priority === 'high' ? alpha('#EF4444', 0.1) : alpha('#F59E0B', 0.1), 
          color: d.priority === 'high' ? '#991B1B' : '#92400E' 
        }} 
      />
    )},
    { key: 'status', label: 'Status', render: (d) => <StatusChip status={d.status} label={d.status} /> },
  ];

  // Quick Stats
  const stats = [
    { label: 'Pending Tickets', value: disputes.filter(d => d.status === 'pending').length, color: '#F59E0B' },
    { label: 'Under Investigation', value: disputes.filter(d => d.status === 'investigating').length, color: '#6366F1' },
    { label: 'Resolved', value: disputes.filter(d => d.status === 'resolved').length, color: '#10B981' },
    { label: 'High Priority', value: disputes.filter(d => d.priority === 'high' && d.status !== 'resolved').length, color: '#EF4444' },
  ];

  return (
    <Box sx={{ p: { xs: 1.5, sm: 2, md: 3 } }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: '#1E293B' }}>
        Dispute Management
      </Typography>
      
      {/* Filter Row */}
      <Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
        <Typography variant="body2" fontWeight="bold">Filter by status:</Typography>
        <Button size="small" variant="outlined" onClick={() => console.log('Filter All')}>All</Button>
        <Button size="small" variant="outlined" sx={{ borderColor: '#F59E0B', color: '#F59E0B' }}>Pending</Button>
        <Button size="small" variant="outlined" sx={{ borderColor: '#6366F1', color: '#6366F1' }}>Investigating</Button>
        <Button size="small" variant="outlined" sx={{ borderColor: '#10B981', color: '#10B981' }}>Resolved</Button>
        <Button size="small" variant="outlined" sx={{ borderColor: '#EF4444', color: '#EF4444' }}>Escalated</Button>
      </Box>
      
      <DataTable
        title="Support Tickets & Disputes"
        data={disputes}
        type="dispute"
        columns={columns}
        showStatusFilter
        onViewDetails={onViewDetails}
        onOpenDisputeChat={handleOpenChat}
        hasPermission={hasPermission}
      />
      
      {/* Quick Stats */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {stats.map((stat) => (
          <Grid item xs={6} md={3} key={stat.label}>
            <DashboardCard sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h4" fontWeight="bold" sx={{ color: stat.color }}>
                {stat.value}
              </Typography>
              <Typography variant="caption" color="text.secondary">{stat.label}</Typography>
            </DashboardCard>
          </Grid>
        ))}
      </Grid>

      {/* Dispute Chat Dialog */}
      <DisputeChatDialog
        open={disputeChatOpen}
        dispute={selectedDispute}
        onClose={() => setDisputeChatOpen(false)}
        newMessage={newMessage}
        onMessageChange={setNewMessage}
        onSendMessage={handleSendMessage}
        user={user}
        isMobile={isMobile}
      />
    </Box>
  );
};

export default DisputesTab;