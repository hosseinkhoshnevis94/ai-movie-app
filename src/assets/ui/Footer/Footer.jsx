import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box position="static"  sx={{marginTop:'150px',backgroundColor:'#00DBDE00',backgroundImage:'linear-gradient(90deg, #00dbde61 0%, #fc00ff6e 100%)',color:'black'}}  >
      <Toolbar sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'130px',gap:'5px'}}>
        <Typography variant="body1" color="inherit">
          © {new Date().getFullYear()} Ai powered movie application. All rights reserved.
        </Typography>
        <Typography variant="body2" color="inherit">Design & Develop By <Typography as='span' sx={{fontWeight:'500'}} >Hossein Khoshnevis</Typography> </Typography>
        <Typography variant="caption" color="inherit">Thanks to JSMastery</Typography>
      </Toolbar>
    </Box>
  );
};

export default Footer;

