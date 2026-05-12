import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ChatBubble = ({ children, isUser }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isUser ? 'flex-end' : 'flex-start',
        marginBottom: 1.5,
        '& .message-content': {
          maxWidth: '80%',
          padding: (theme) => theme.spacing(1, 1.5),
          borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
          backgroundColor: isUser ? '#0025DD' : '#E5E7EB',
          color: isUser ? 'white' : '#1F2937',
          wordBreak: 'break-word',
        },
        '& .message-sender': {
          fontSize: '0.7rem',
          color: '#6B7280',
          marginBottom: 0.3,
          marginLeft: isUser ? 0 : 1,
          marginRight: isUser ? 1 : 0,
        }
      }}
    >
      {children}
    </Box>
  );
};

export default ChatBubble;