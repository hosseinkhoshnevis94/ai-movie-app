import React from 'react'
import MovieList from './components/MovieList/MovieList'
import GenreList from './components/GenreList/GenreList'
import { Grid } from '@mui/material'
import SideBar from '../../ui/SideBar/SideBar'

const HomePage = () => {

  
  return (
    <Grid container maxWidth={'xl'} sx={{margin:'40px auto'}}>
    <Grid item xs={0} md={2} sx={{display:{xs:'none',sm:'block'}}} >
      <SideBar></SideBar>
     </Grid>
     <Grid item xs={12} md={10}>
     <MovieList></MovieList>
    </Grid>
    </Grid>
  )
}

export default HomePage