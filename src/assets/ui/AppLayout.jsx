import React, { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import useAlan from './Alan/Alan';

const AppLayout = () => {
  useAlan()
  const alanBtnRef = useRef()
  return (
    <>
         <NavBar></NavBar>
        <Container sx={{minHeight:'1000px'}}>
         <Grid container maxWidth={'xl'} sx={{margin:'40px auto'}}>
         <Outlet></Outlet>
         </Grid>
         </Container>
         <Footer></Footer>
         <Box  ref={alanBtnRef}></Box>
           </>
  )
}

export default AppLayout