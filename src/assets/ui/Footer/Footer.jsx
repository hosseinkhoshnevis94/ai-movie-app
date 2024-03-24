import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static"  sx={{marginTop:'150px',backgroundColor:'#00DBDE00',backgroundImage:'linear-gradient(90deg, #00dbde61 0%, #fc00ff6e 100%)',color:'black'}}  >
      <Toolbar sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100px'}}>
        <Typography variant="body1" color="inherit">
          © {new Date().getFullYear()} Ai powered movie application. All rights reserved.
        </Typography>
        <Typography variant="caption" color="inherit">DEsigner & DEveloper | Hossein Khoshnevis</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

