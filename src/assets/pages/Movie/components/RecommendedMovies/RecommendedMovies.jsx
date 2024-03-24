import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Movie from '../../../Home/components/Movie/Movie';

const RecommendedMovies = ({movies,isFetching}) => {
  return (
    <Grid container columnSpacing={1} rowSpacing={2} sx={{marginTop:'55px'}}>
      <Grid item xs={12}>
      <Typography gutterBottom variant="h6" component="h4">Recommended movies:</Typography>
      </Grid>
       {movies.map((movie,i)=>
      <Grid item xs={2}>
     <Movie key={movie.id} movie={movie} isFetching={isFetching} ></Movie>
      </Grid>
     ) }
    </Grid>
  )
}

export default RecommendedMovies