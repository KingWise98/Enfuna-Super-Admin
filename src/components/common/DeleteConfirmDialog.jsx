import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WarningIcon from '@mui/icons-material/Warning';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteConfirmDialog = ({ open, item, onClose, onConfirm, isMobile }) => {
  const displayName = item?.full_names || item?.full_name || item?.name;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { borderRadius: 3, maxWidth: 400, mx: 2 } }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: '#EF4444', color: 'white' }}>
        <WarningIcon />
        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>
          Confirm Delete
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <DialogContentText>
          Are you sure you want to delete <strong>{displayName}</strong>?
          This action cannot be undone and will permanently remove all associated data.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ p: 2, gap: 1, flexDirection: isMobile ? 'column' : 'row' }}>
        <Button 
          onClick={onClose}
          variant="outlined"
          sx={{ borderColor: '#64748B', color: '#64748B' }}
          fullWidth={isMobile}
        >
          Cancel
        </Button>
        <Button 
          onClick={onConfirm}
          variant="contained"
          sx={{ bgcolor: '#EF4444', '&:hover': { bgcolor: '#DC2626' } }}
          startIcon={<DeleteIcon />}
          fullWidth={isMobile}
        >
          Delete Permanently
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmDialog;