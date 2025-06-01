import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <CircularProgress
        variant="indeterminate"
        sx={{
          color: 'red',
          '& circle': {
            strokeDasharray: '4',
          },
        }}
      />
    </Box>
  );
}