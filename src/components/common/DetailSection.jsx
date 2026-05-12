import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

const DetailSection = ({ title, children, icon: Icon, color }) => (
  <Paper 
    elevation={0} 
    sx={{ 
      p: { xs: 1.5, sm: 2, md: 2.5 }, 
      borderRadius: { xs: 2, sm: 3 }, 
      bgcolor: 'white', 
      border: '1px solid rgba(0,0,0,0.06)',
      height: '100%',
      mb: { xs: 1.5, sm: 2 }
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: { xs: 1.5, sm: 2 } }}>
      {Icon && <Icon sx={{ color: color || '#0025DD', fontSize: { xs: 18, sm: 20 } }} />}
      <Typography variant="subtitle1" fontWeight={700} sx={{ color: '#1E293B', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
        {title}
      </Typography>
    </Box>
    <Divider sx={{ mb: { xs: 1.5, sm: 2 } }} />
    {children}
  </Paper>
);

export default DetailSection;