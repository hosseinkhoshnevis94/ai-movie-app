import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Movie from '../Movie/Movie';
import { useGetGenresQuery, useGetMoviesQuery } from '../../../../services/tmdb';
import Spinner from '../../../../ui/components/Spinner/Spinner';
import { Divider, Grow, Skeleton, Typography } from '@mui/material';
import MovieSkeleton from '../../../../ui/components/MovieSkeleton/MovieSkeleton';

const MovieList = ({title}) => {
    const {data,error,isLoading} = useGetMoviesQuery()

  if(isLoading ) return <Grid container spacing={{ xs: 2, md: 3 }} >
  {Array(20).fill('1').map((movie, index) => (
       <Grid xs={12} sm={4} md={3} >
        <MovieSkeleton></MovieSkeleton>
       </Grid>
     ))}
  </Grid> 

  if(error) return <Grid xs={12} sm={4} md={2} >
  <div>Error</div>
  </Grid> 
 

 return (
    <>
    <Typography variant="body1" color="initial" sx={{marginBottom:"15px",fontSize:"18px",fontWeight:'bold', color:"#ff9100"}}>{title}</Typography>
    <Grid container spacing={{ xs: 2, md: 3 }} >
      {data.results?.slice(0,8).map((movie, index) => (
          <Grid xs={12} sm={4} md={3} >
        <Movie movie={movie}></Movie>
        </Grid>
      ))}
</Grid>
      </>
  )
}

export default MovieList