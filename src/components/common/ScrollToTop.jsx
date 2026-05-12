import { Fade, Box, Fab } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 400,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: { xs: 16, sm: 24 },
          right: { xs: 16, sm: 24 },
          zIndex: 1000,
        }}
      >
        <Fab
          size="medium"
          aria-label="scroll back to top"
          sx={{
            bgcolor: '#0025DD',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0,37,221,0.4)',
            '&:hover': { bgcolor: '#001DB0' },
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      </Box>
    </Fade>
  );
};

export default ScrollToTop;