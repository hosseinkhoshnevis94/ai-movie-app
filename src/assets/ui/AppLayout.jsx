import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Grid } from '@mui/material'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import SideBar from './SideBar/SideBar'
const AppLayout = () => {
  return (
    <div>
         <NavBar></NavBar>
         <Grid container  >
         <Grid xs={2} md={2}>
           <SideBar></SideBar>
          </Grid>
          <Grid xs={10} md={10}>
         <Outlet></Outlet>
         </Grid>
         </Grid>
         <Footer></Footer>
    </div>
  )
}

export default AppLayout