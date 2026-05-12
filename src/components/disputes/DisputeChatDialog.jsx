import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import ChatBubble from './ChatBubble';

const DisputeChatDialog = ({ open, dispute, onClose, newMessage, onMessageChange, onSendMessage, user, isMobile }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      fullScreen={isMobile}
      PaperProps={{ sx: { borderRadius: { xs: 0, sm: 3 } } }}
    >
      <Box sx={{ bgcolor: '#0025DD', color: 'white', p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {dispute?.ticket_number} - {dispute?.title}
            </Typography>
            <Typography variant="caption">
              {dispute?.rider_name} vs {dispute?.customer_name}
            </Typography>
          </Box>
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <DialogContent sx={{ p: 2, bgcolor: '#F8FAFC' }}>
        <Box sx={{ height: 400, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}>
          {dispute?.messages?.map((msg) => (
            <ChatBubble key={msg.id} isUser={msg.sender === 'admin'}>
              <Typography variant="caption" className="message-sender">
                {msg.sender_name} • {new Date(msg.timestamp).toLocaleTimeString()}
              </Typography>
              <Box className="message-content">
                <Typography variant="body2">{msg.message}</Typography>
              </Box>
            </ChatBubble>
          ))}
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Type your response..."
          value={newMessage}
          onChange={(e) => onMessageChange(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
        />
        <IconButton onClick={onSendMessage} sx={{ bgcolor: '#0025DD', color: 'white', borderRadius: 2, ml: 1 }}>
          <SendIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
};

export default DisputeChatDialog;