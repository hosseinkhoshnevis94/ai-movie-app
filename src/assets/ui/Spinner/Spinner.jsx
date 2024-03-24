import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';



const Spinner = () => {
  return (
    <Box sx={{margin:'auto',width:'100%',textAlign:'center',marginTop:'10vh'}}>
     <CircularProgress disableShrink />
    </Box>
  );
}

export default Spinner

