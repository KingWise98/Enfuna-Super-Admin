import { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { alpha } from '@mui/material/styles';
import DataTable from '../common/DataTable';
import ContactDialog from './ContactDialog';
import { getTypeColor } from '../../utils/helpers';
import { StatusChip } from '../../styles/styledComponents';

import AddIcon from '@mui/icons-material/Add';

const ContactsTab = ({ contacts, onViewDetails, onDeleteUser, onUpdateContact, hasPermission }) => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  const handleOpenAddContact = () => {
    setCurrentContact({
      full_name: "",
      type: "customer",
      phone: "+256 ",
      email: "",
      location: "",
      bussiness_name: "",
      loyalty_points: 0,
      status: "active"
    });
    setContactDialogOpen(true);
  };

  const handleOpenEditContact = (contact) => {
    setCurrentContact(contact);
    setContactDialogOpen(true);
  };

  const handleSaveContact = () => {
    onUpdateContact(currentContact);
    setContactDialogOpen(false);
  };

  const columns = [
    { key: 'full_name', label: 'Name', render: (c) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Avatar sx={{ width: { xs: 28, sm: 32 }, height: { xs: 28, sm: 32 }, bgcolor: getTypeColor(c.type), fontSize: '0.8rem' }}>
          {c.full_name?.charAt(0)}
        </Avatar>
        <Box>
          <Typography variant="body2" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
            {c.full_name}
          </Typography>
          <Typography variant="caption" color="text.secondary">{c.email}</Typography>
        </Box>
      </Box>
    )},
    { key: 'type', label: 'Type', render: (c) => (
      <Chip label={c.type} size="small" sx={{ bgcolor: alpha(getTypeColor(c.type), 0.1), color: getTypeColor(c.type), fontWeight: 600 }} />
    )},
    { key: 'phone', label: 'Phone' },
    { key: 'bussiness_name', label: 'Business' },
    { key: 'location', label: 'Location' },
    { key: 'loyalty_points', label: 'Points', render: (c) => (
      <Typography variant="body2" fontWeight="bold" color="#F59E0B" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
        {c.loyalty_points || 0}
      </Typography>
    )},
    { key: 'status', label: 'Status', render: (c) => <StatusChip status={c.status} label={c.status} /> },
  ];

  return (
    <>
      <DataTable
        title="📇 Contacts Management"
        data={contacts}
        type="contact"
        columns={columns}
        showStatusFilter
        onAdd={handleOpenAddContact}
        onViewDetails={onViewDetails}
        onDeleteUser={onDeleteUser}
        onEditContact={handleOpenEditContact}
        hasPermission={hasPermission}
      />

      <ContactDialog
        open={contactDialogOpen}
        contact={currentContact}
        onClose={() => setContactDialogOpen(false)}
        onSave={handleSaveContact}
      />
    </>
  );
};

export default ContactsTab;