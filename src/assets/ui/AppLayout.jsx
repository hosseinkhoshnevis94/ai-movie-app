import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import NavBar from './NavBar/NavBar'
const AppLayout = () => {
  return (
    <div>
         <NavBar></NavBar>
         <Container maxWidth="xl" sx={{paddingY:'40px'}}>
        <Outlet></Outlet>
         </Container>
    </div>
  )
}

export default AppLayout