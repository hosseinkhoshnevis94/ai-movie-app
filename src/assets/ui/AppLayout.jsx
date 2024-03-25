import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

const AppLayout = () => {
  return (
    <>
         <NavBar></NavBar>
        <Container>
         <Grid container maxWidth={'xl'} sx={{margin:'40px auto'}}>
         <Outlet></Outlet>
         </Grid>
         </Container>
         <Footer></Footer>
           </>
  )
}

export default AppLayout