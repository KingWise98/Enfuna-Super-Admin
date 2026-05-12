"use client";

import { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CircularProgress from '@mui/material/CircularProgress';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Layout Components
import Sidebar from '../components/layout/Sidebar';
import MobileHeader from '../components/layout/MobileHeader';
import MobileTabNavigation from '../components/layout/MobileTabNavigation';

// Tab Components
import Dashboard from '../components/dashboard/Dashboard';
import RidersTab from '../components/riders/RidersTab';
import TripsTab from '../components/trips/TripsTab';
import DeliveriesTab from '../components/deliveries/DeliveriesTab';
import ExpensesTab from '../components/expenses/ExpensesTab';
import GroupsTab from '../components/groups/GroupsTab';
import WalletsTab from '../components/wallets/WalletsTab';
import ContactsTab from '../components/contacts/ContactsTab';
import AgentsTab from '../components/agents/AgentsTab';
import DisputesTab from '../components/disputes/DisputesTab';
import AnalyticsTab from '../components/analytics/AnalyticsTab';
import WithdrawalsTab from '../components/withdrawals/WithdrawalsTab';

// Common Components
import DeleteConfirmDialog from '../components/common/DeleteConfirmDialog';
import BlockConfirmDialog from '../components/common/BlockConfirmDialog';
import ScrollToTop from '../components/common/ScrollToTop';
import { MainContent } from '../styles/styledComponents';

// Data
import {
  DUMMY_RIDERS,
  DUMMY_TRIPS,
  DUMMY_DELIVERIES,
  DUMMY_EXPENSES,
  DUMMY_GROUPS,
  DUMMY_WALLETS,
  DUMMY_CONTACTS,
  DUMMY_AGENTS,
  DUMMY_AGENT_APPLICATIONS,
  DUMMY_DISPUTES,
  DUMMY_WITHDRAWALS,
} from '../data/dummyData';

// Hooks and Utils
import { ROLE_PERMISSIONS } from '../utils/constants';

const SuperAdminDashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // User State
  const [currentUserRole, setCurrentUserRole] = useState('super_admin');
  const [userPermissions, setUserPermissions] = useState(ROLE_PERMISSIONS.super_admin);
  const [activeTab, setActiveTab] = useState(0);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // User info
  const user = {
    full_names: 'Walter Sultan',
    email: 'admin@enfuna.ug',
    role: 'super_admin',
    user_id: 'ADM-001',
    avatar: null
  };

  // Dashboard Stats
  const [dashboardStats] = useState({
    totalRiders: 1250,
    activeRiders: 980,
    totalTrips: 15420,
    todayTrips: 342,
    totalDeliveries: 3240,
    todayDeliveries: 78,
    totalRevenue: 285000000,
    todayRevenue: 15200000,
    platformFees: 28500000,
    totalExpenses: 45000000,
    pendingExpenses: 3200000,
    totalGroups: 85,
    activeGroups: 72,
    groupPool: 25000000,
    totalWallets: 1250,
    totalWalletBalance: 185000000,
    totalContacts: 850,
    activeContacts: 720,
    totalAgents: 45,
    activeAgents: 38,
    totalAgentCommissions: 15000000,
    pendingWithdrawals: 12,
    pendingWithdrawalAmount: 3500000,
    averageRating: 4.5,
    customerSatisfaction: 92,
    totalDisputes: 45,
    pendingDisputes: 23,
    resolvedDisputes: 22,
  });

  // Data States
  const [riders, setRiders] = useState(DUMMY_RIDERS);
  const [trips] = useState(DUMMY_TRIPS);
  const [expenses] = useState(DUMMY_EXPENSES);
  const [deliveries] = useState(DUMMY_DELIVERIES);
  const [groups, setGroups] = useState(DUMMY_GROUPS);
  const [withdrawals] = useState(DUMMY_WITHDRAWALS);
  const [wallets] = useState(DUMMY_WALLETS);
  const [contacts, setContacts] = useState(DUMMY_CONTACTS);
  const [agents, setAgents] = useState(DUMMY_AGENTS);
  const [agentApplications, setAgentApplications] = useState(DUMMY_AGENT_APPLICATIONS);
  const [disputes, setDisputes] = useState(DUMMY_DISPUTES);
  const [chatMessages, setChatMessages] = useState([]);

  // UI States
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState('');
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [deleteConfirmDialog, setDeleteConfirmDialog] = useState({ open: false, item: null, type: '' });
  const [blockConfirmDialog, setBlockConfirmDialog] = useState({ open: false, item: null, type: '' });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  // Utility Functions
  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      showSnackbar('Dashboard data refreshed successfully', 'success');
    }, 1500);
  };

  // Role Management
  const changeUserRole = (role) => {
    setCurrentUserRole(role);
    setUserPermissions(ROLE_PERMISSIONS[role] || ROLE_PERMISSIONS.viewer);
    showSnackbar(`Role switched to ${role.replace('_', ' ')}`, 'info');
  };

  const hasPermission = (permission) => {
    return userPermissions[permission] === true;
  };

  // View Details Modal
  const handleViewDetails = (item, type) => {
    setSelectedItem(item);
    setModalType(type);
    setShowDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedItem(null);
    setModalType('');
  };

  // CRUD Operations
  const handleBlockUser = (item, type) => {
    setBlockConfirmDialog({ open: true, item, type });
  };

  const confirmBlockUser = () => {
    const { item, type } = blockConfirmDialog;
    if (type === 'rider') {
      setRiders(prevRiders => 
        prevRiders.map(rider => 
          rider.id === item.id 
            ? { ...rider, status: rider.status === 'active' ? 'suspended' : 'active' }
            : rider
        )
      );
      showSnackbar(`${item.full_names} has been ${item.status === 'active' ? 'blocked' : 'unblocked'} successfully`, 'success');
    } else if (type === 'group') {
      setGroups(prevGroups =>
        prevGroups.map(group =>
          group.id === item.id
            ? { ...group, status: group.status === 'active' ? 'suspended' : 'active' }
            : group
        )
      );
      showSnackbar(`Group "${item.name}" has been ${item.status === 'active' ? 'suspended' : 'activated'}`, 'success');
    }
    setBlockConfirmDialog({ open: false, item: null, type: '' });
  };

  const handleDeleteUser = (item, type) => {
    setDeleteConfirmDialog({ open: true, item, type });
  };

  const confirmDeleteUser = () => {
    const { item, type } = deleteConfirmDialog;
    if (type === 'rider') {
      setRiders(prevRiders => prevRiders.filter(rider => rider.id !== item.id));
      showSnackbar(`${item.full_names} has been deleted successfully`, 'error');
    } else if (type === 'contact') {
      setContacts(prevContacts => prevContacts.filter(contact => contact.id !== item.id));
      showSnackbar(`${item.full_name} has been deleted successfully`, 'error');
    } else if (type === 'group') {
      setGroups(prevGroups => prevGroups.filter(group => group.id !== item.id));
      showSnackbar(`Group "${item.name}" has been deleted successfully`, 'error');
    }
    setDeleteConfirmDialog({ open: false, item: null, type: '' });
  };

  // Agent Management
  const handleApproveAgent = (application) => {
    const newAgent = {
      id: `AGT-00${agents.length + 1}`,
      rider_name: application.rider_name,
      rider_id: application.rider_id,
      referral_code: `${application.rider_name.substring(0, 4).toUpperCase()}${Math.floor(Math.random() * 10000)}`,
      total_referrals: 0,
      active_referrals: 0,
      total_commission: 0,
      available_commission: 0,
      is_active: true,
      commission_rate: 3,
      created_at: new Date().toISOString(),
      tier: 'Bronze',
      region: 'Kampala',
      status: 'approved'
    };
    setAgents([...agents, newAgent]);
    setAgentApplications(agentApplications.filter(app => app.id !== application.id));
    setRiders(prevRiders =>
      prevRiders.map(rider =>
        rider.id === application.rider_id
          ? { ...rider, is_agent: true }
          : rider
      )
    );
    showSnackbar(`${application.rider_name} has been approved as an agent`, 'success');
  };

  const handleDenyAgent = (application) => {
    setAgentApplications(agentApplications.filter(app => app.id !== application.id));
    showSnackbar(`Agent application for ${application.rider_name} has been denied`, 'info');
  };

  const handleRemoveAgent = (agent) => {
    setAgents(agents.filter(a => a.id !== agent.id));
    setRiders(prevRiders =>
      prevRiders.map(rider =>
        rider.id === agent.rider_id
          ? { ...rider, is_agent: false }
          : rider
      )
    );
    showSnackbar(`${agent.rider_name} has been removed as an agent`, 'info');
  };

  const handleAdjustCommission = (agent, newRate) => {
    setAgents(agents.map(a =>
      a.id === agent.id
        ? { ...a, commission_rate: newRate }
        : a
    ));
    showSnackbar(`Commission rate for ${agent.rider_name} updated to ${newRate}%`, 'success');
  };

  // Dispute Management
  const handleResolveDispute = (dispute, resolution) => {
    setDisputes(disputes.map(d =>
      d.id === dispute.id
        ? {
            ...d,
            status: 'resolved',
            resolution_notes: resolution,
            resolved_at: new Date().toISOString(),
            resolved_by: user.full_names
          }
        : d
    ));
    showSnackbar(`Dispute ${dispute.ticket_number} marked as resolved`, 'success');
  };

  const handleUpdateDisputeStatus = (dispute, newStatus) => {
    setDisputes(disputes.map(d =>
      d.id === dispute.id
        ? { ...d, status: newStatus }
        : d
    ));
    showSnackbar(`Dispute status updated to ${newStatus}`, 'success');
  };

  const handleSendChatMessage = (dispute, message, currentUser) => {
    const newMsg = {
      id: `msg${Date.now()}`,
      sender: 'admin',
      sender_name: currentUser.full_names,
      message: message,
      timestamp: new Date().toISOString(),
      is_read: true
    };
    
    setDisputes(disputes.map(d =>
      d.id === dispute.id
        ? { ...d, messages: [...(d.messages || []), newMsg] }
        : d
    ));
    
    showSnackbar('Message sent successfully', 'success');
  };

  // Contact Management
  const handleUpdateContact = (contact) => {
    if (contact.id) {
      setContacts(prevContacts => prevContacts.map(c => c.id === contact.id ? contact : c));
      showSnackbar('Contact updated successfully', 'success');
    } else {
      const newContact = {
        ...contact,
        id: `CNT-${String(contacts.length + 1).padStart(3, '0')}`,
        created_at: new Date().toISOString()
      };
      setContacts([...contacts, newContact]);
      showSnackbar('Contact added successfully', 'success');
    }
  };

  // Role Switch Handler
  const handleRoleSwitch = () => {
    const roles = ['super_admin', 'admin', 'agent', 'viewer'];
    const currentIndex = roles.indexOf(currentUserRole);
    const nextRole = roles[(currentIndex + 1) % roles.length];
    changeUserRole(nextRole);
  };

  // Render Methods
  const renderTabContent = () => {
    const commonProps = {
      onViewDetails: handleViewDetails,
      hasPermission: userPermissions,
    };

    switch (activeTab) {
      case 0:
        return (
          <Dashboard
            dashboardStats={dashboardStats}
            trips={trips}
            disputes={disputes}
            wallets={wallets}
            groups={groups}
            onViewDetails={handleViewDetails}
            onTabChange={setActiveTab}
            onRefresh={handleRefresh}
            refreshing={refreshing}
            user={user}
            isMobile={isMobile}
          />
        );
      case 1:
        return (
          <RidersTab
            riders={riders}
            onBlockUser={handleBlockUser}
            onDeleteUser={handleDeleteUser}
            {...commonProps}
          />
        );
      case 2:
        return <TripsTab trips={trips} {...commonProps} />;
      case 3:
        return <DeliveriesTab deliveries={deliveries} {...commonProps} />;
      case 4:
        return <ExpensesTab expenses={expenses} {...commonProps} />;
      case 5:
        return (
          <GroupsTab
            groups={groups}
            onBlockUser={handleBlockUser}
            onDeleteUser={handleDeleteUser}
            {...commonProps}
          />
        );
      case 6:
        return <WalletsTab wallets={wallets} {...commonProps} />;
      case 7:
        return (
          <ContactsTab
            contacts={contacts}
            onDeleteUser={handleDeleteUser}
            onUpdateContact={handleUpdateContact}
            {...commonProps}
          />
        );
      case 8:
        return (
          <AgentsTab
            agents={agents}
            agentApplications={agentApplications}
            onRemoveAgent={handleRemoveAgent}
            onAdjustCommission={handleAdjustCommission}
            onApproveAgent={handleApproveAgent}
            onDenyAgent={handleDenyAgent}
            {...commonProps}
          />
        );
      case 9:
        return (
          <DisputesTab
            disputes={disputes}
            onResolveDispute={handleResolveDispute}
            onUpdateStatus={handleUpdateDisputeStatus}
            onSendChatMessage={handleSendChatMessage}
            user={user}
            isMobile={isMobile}
            {...commonProps}
          />
        );
      case 10:
        return <AnalyticsTab />;
      case 11:
        return <WithdrawalsTab withdrawals={withdrawals} {...commonProps} />;
      default:
        return null;
    }
  };

  // Details Modal Renderer
  const renderDetailsModal = () => {
    if (!selectedItem) return null;

    return (
      <Box>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' }, 
          gap: 2, 
          mb: 3, 
          pb: 3, 
          borderBottom: '1px solid rgba(0,0,0,0.1)' 
        }}>
          <Box sx={{ bgcolor: 'rgba(0,37,221,0.1)', borderRadius: 2, p: 1.5, display: 'flex' }}>
            <Box sx={{ fontSize: { xs: 28, sm: 32 } }}>
              {/* Icon based on type */}
            </Box>
          </Box>
          <Box>
            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem' } }}>
              {selectedItem.full_names || selectedItem.name || selectedItem.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {modalType} Details
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Details for {modalType}: {JSON.stringify(selectedItem, null, 2)}
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ display: 'flex', bgcolor: '#F8FAFC', minHeight: '100vh' }}>
      {/* Sidebar - Desktop */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        currentUserRole={currentUserRole}
        userPermissions={userPermissions}
        onRoleSwitch={handleRoleSwitch}
        user={user}
        riders={riders}
        trips={trips}
        deliveries={deliveries}
        expenses={expenses}
        groups={groups}
        wallets={wallets}
        contacts={contacts}
        agents={agents}
        agentApplications={agentApplications}
        disputes={disputes}
        withdrawals={withdrawals}
        isMobile={false}
      />

      {/* Mobile Drawer */}
      <Drawer 
        open={mobileSidebarOpen} 
        onClose={() => setMobileSidebarOpen(false)}
        sx={{ '& .MuiDrawer-paper': { width: 280 } }}
      >
        <Sidebar
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            setMobileSidebarOpen(false);
          }}
          currentUserRole={currentUserRole}
          userPermissions={userPermissions}
          onRoleSwitch={handleRoleSwitch}
          user={user}
          riders={riders}
          trips={trips}
          deliveries={deliveries}
          expenses={expenses}
          groups={groups}
          wallets={wallets}
          contacts={contacts}
          agents={agents}
          agentApplications={agentApplications}
          disputes={disputes}
          withdrawals={withdrawals}
          isMobile={true}
          onCloseMobile={() => setMobileSidebarOpen(false)}
        />
      </Drawer>

      <MainContent>
        {/* Mobile Header */}
        {isTablet && (
          <MobileHeader
            onMenuClick={() => setMobileSidebarOpen(true)}
            onRefresh={handleRefresh}
            refreshing={refreshing}
          />
        )}

        {/* Mobile Tab Navigation */}
        {isTablet && (
          <MobileTabNavigation
            activeTab={activeTab}
            onTabChange={setActiveTab}
            userPermissions={userPermissions}
          />
        )}

        {/* Main Content */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
            <Box sx={{ textAlign: 'center' }}>
              <CircularProgress size={48} sx={{ color: '#0025DD' }} />
              <Typography sx={{ mt: 2, color: 'text.secondary' }}>Loading Enfuna Dashboard...</Typography>
            </Box>
          </Box>
        ) : (
          renderTabContent()
        )}
      </MainContent>

      {/* Details Modal */}
      <Dialog
        open={showDetailsModal}
        onClose={handleCloseDetailsModal}
        maxWidth="lg"
        fullWidth
        fullScreen={isMobile}
        TransitionComponent={Slide}
        PaperProps={{
          sx: {
            borderRadius: { xs: 0, sm: 4 },
            bgcolor: '#F8FAFC',
            mx: { xs: 0, sm: 2 },
            my: { xs: 0, sm: 2 },
          }
        }}
      >
        <Box sx={{ bgcolor: '#0025DD', color: 'white', p: { xs: 2, sm: 2.5 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
              {modalType === 'rider' ? 'Rider Details' :
               modalType === 'trip' ? 'Trip Details' :
               modalType === 'expense' ? 'Expense Details' :
               modalType === 'contact' ? 'Contact Details' :
               modalType === 'wallet' ? 'Wallet Details' :
               modalType === 'group' ? 'Group Details' :
               modalType === 'agent' ? 'Agent Details' :
               modalType === 'delivery' ? 'Delivery Details' :
               modalType === 'withdrawal' ? 'Withdrawal Details' :
               modalType === 'dispute' ? 'Dispute Details' : 'Details'}
            </Typography>
            <IconButton onClick={handleCloseDetailsModal} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <DialogContent sx={{ p: { xs: 1.5, sm: 2, md: 3 } }}>
          {renderDetailsModal()}
        </DialogContent>
        <DialogActions sx={{ p: { xs: 2, sm: 2.5 }, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          <Button onClick={handleCloseDetailsModal} sx={{ color: '#64748B' }}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Confirmation Dialogs */}
      <DeleteConfirmDialog
        open={deleteConfirmDialog.open}
        item={deleteConfirmDialog.item}
        onClose={() => setDeleteConfirmDialog({ open: false, item: null, type: '' })}
        onConfirm={confirmDeleteUser}
        isMobile={isMobile}
      />

      <BlockConfirmDialog
        open={blockConfirmDialog.open}
        item={blockConfirmDialog.item}
        onClose={() => setBlockConfirmDialog({ open: false, item: null, type: '' })}
        onConfirm={confirmBlockUser}
        isMobile={isMobile}
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Snackbar Notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        TransitionComponent={Slide}
        sx={{
          '& .MuiAlert-root': {
            borderRadius: { xs: 2, sm: 2 },
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            minWidth: { xs: '90vw', sm: 300 },
            maxWidth: { xs: '95vw', sm: 400 }
          }
        }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SuperAdminDashboard;