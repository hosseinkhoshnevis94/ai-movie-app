import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import { Container } from '@mui/material'

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