import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { ActionButton } from '../../styles/styledComponents';

const ContactDialog = ({ open, contact, onClose, onSave }) => {
  const [formData, setFormData] = useState(contact);

  useEffect(() => {
    setFormData(contact);
  }, [contact]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{ sx: { borderRadius: { xs: 0, sm: 3 } } }}
    >
      <Box sx={{ bgcolor: '#0025DD', color: 'white', p: { xs: 2, sm: 2.5 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
            {contact?.id ? 'Edit Contact' : 'Add New Contact'}
          </Typography>
          <Button onClick={onClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </Button>
        </Box>
      </Box>
      <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Grid container spacing={2} sx={{ mt: 0.5 }}>
          <Grid item xs={12}>
            <TextField fullWidth label="Full Name *" name="full_name" value={formData?.full_name || ''} onChange={handleChange} size="small" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Type</InputLabel>
              <Select label="Type" name="type" value={formData?.type || 'customer'} onChange={handleChange}>
                <MenuItem value="customer">Customer</MenuItem>
                <MenuItem value="supplier">Supplier</MenuItem>
                <MenuItem value="employee">Employee</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Status</InputLabel>
              <Select label="Status" name="status" value={formData?.status || 'active'} onChange={handleChange}>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Phone Number *" name="phone" value={formData?.phone || '+256 '} onChange={handleChange} size="small" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" type="email" name="email" value={formData?.email || ''} onChange={handleChange} size="small" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Business Name" name="bussiness_name" value={formData?.bussiness_name || ''} onChange={handleChange} size="small" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Location" name="location" value={formData?.location || ''} onChange={handleChange} size="small" />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ p: { xs: 2, sm: 2.5 }, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        <Button onClick={onClose} sx={{ color: '#64748B' }}>Cancel</Button>
        <ActionButton variant="contained" sx={{ bgcolor: '#0025DD' }} onClick={handleSubmit} startIcon={<SaveIcon />}>
          {contact?.id ? 'Update Contact' : 'Add Contact'}
        </ActionButton>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;