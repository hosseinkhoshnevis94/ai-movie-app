import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
const AppLayout = () => {
  return (
    <div>
         <NavBar></NavBar>
         <Container maxWidth="xl" sx={{paddingY:'40px'}}>
        <Outlet></Outlet>
         </Container>
        <Footer></Footer>
    </div>
  )
}

export default AppLayout