import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{marginTop:'80px'}}  >
      <Toolbar sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100px'}}>
        <Typography variant="body1" color="inherit">
          © {new Date().getFullYear()} Ai powered movie application. All rights reserved,
        </Typography>
        <Typography variant="caption" color="inherit">Hossein Khoshnevis</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
