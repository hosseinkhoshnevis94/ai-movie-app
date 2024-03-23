import React from 'react'
import MovieList from './components/MovieList/MovieList'
import GenreList from './components/GenreList/GenreList'
import { Box } from '@mui/material'

const Home = () => {

  
  return (
    <Box sx={{padding:'0px 15px'}}>
      
      <MovieList></MovieList>
      {/* <GenreList></GenreList> */}

      
    </Box>
  )
}

export default Home