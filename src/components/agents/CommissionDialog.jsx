import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const CommissionDialog = ({ open, agent, onClose, onSave }) => {
  const [newCommission, setNewCommission] = useState(agent?.commission_rate || 5);

  const handleSave = () => {
    onSave(agent, newCommission);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { borderRadius: 3, maxWidth: 400, mx: 2 } }}
    >
      <DialogTitle sx={{ bgcolor: '#0025DD', color: 'white' }}>
        Adjust Commission Rate
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <DialogContentText sx={{ mb: 2 }}>
          Set new commission rate for {agent?.rider_name}
        </DialogContentText>
        <TextField
          fullWidth
          type="number"
          label="Commission Rate (%)"
          value={newCommission}
          onChange={(e) => setNewCommission(parseInt(e.target.value))}
          InputProps={{ endAdornment: '%' }}
        />
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button 
          variant="contained" 
          sx={{ bgcolor: '#0025DD' }}
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommissionDialog;