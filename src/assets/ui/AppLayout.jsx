import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import SideBar from './SideBar/SideBar'
const AppLayout = () => {
  return (
    <div>
         <NavBar></NavBar>
         <Grid container maxWidth={'xl'} sx={{margin:'40px auto'}}>
         {/* <Grid item xs={0} md={2} sx={{display:{xs:'none',sm:'block'}}} >
           <SideBar></SideBar>
          </Grid>
          <Grid item xs={12} md={10}> */}
         <Outlet></Outlet>
         {/* </Grid> */}
         </Grid>
         <Footer></Footer>
    </div>
  )
}

export default AppLayout