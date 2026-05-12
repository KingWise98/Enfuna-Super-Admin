import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BlockIcon from '@mui/icons-material/Block';

const BlockConfirmDialog = ({ open, item, onClose, onConfirm, isMobile }) => {
  const displayName = item?.full_names || item?.name;
  const isActive = item?.status === 'active';

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { borderRadius: 3, maxWidth: 400, mx: 2 } }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1, 
        bgcolor: isActive ? '#EF4444' : '#10B981', 
        color: 'white' 
      }}>
        <BlockIcon />
        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>
          {isActive ? 'Confirm Block/Suspend' : 'Confirm Activate'}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <DialogContentText>
          Are you sure you want to {isActive ? 'block/suspend' : 'activate'} <strong>{displayName}</strong>?
          {isActive 
            ? ' This user/group will no longer be able to access the platform or perform any actions.'
            : ' This user/group will regain full access to the platform.'}
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
          sx={{ bgcolor: isActive ? '#EF4444' : '#10B981' }}
          fullWidth={isMobile}
        >
          {isActive ? 'Yes, Block/Suspend' : 'Yes, Activate'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BlockConfirmDialog;