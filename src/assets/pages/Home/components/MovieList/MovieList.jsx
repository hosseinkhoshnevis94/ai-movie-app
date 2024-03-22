import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Movie from '../Movie/Movie';
import {  useGetMoviesQuery } from '../../../../services/tmdb';
import { Typography } from '@mui/material';
import MovieSkeleton from '../../../../ui/MovieSkeleton/MovieSkeleton';
import { useSelector } from 'react-redux';

const MovieList = ({title}) => {
  const [page,sePage] = useState(1)
  const genreName = useSelector(state=>state.genre.genre)
    const {data,error,isLoading} = useGetMoviesQuery(genreName)

  if(isLoading ) return <Grid container spacing={{ xs: 2, md: 3 }} >
  {Array(20).fill('1').map((_, index) => (
       <Grid key={index} xs={12} sm={4} md={3} >
        <MovieSkeleton></MovieSkeleton>
       </Grid>
     ))}
  </Grid> 

  if(error) return <Grid xs={12} sm={4} md={2} >
  <div>Error</div>
  </Grid> 
 

 return (
    <>
    <Grid container spacing={{ xs: 1, md: 1 }} sx={{marginTop:'20px'}} >
      <Grid xs={12}>
       <Typography variant="body1" color="initial" sx={{fontSize:"18px",fontWeight:'bold', color:"#ff9100"}}>{title}</Typography>
      </Grid>
      {data.results?.slice(0,8).map((movie, index) => (
          <Grid key={movie.id} xs={12} sm={4} md={3} >
        <Movie movie={movie}></Movie>
        </Grid>
      ))}
     </Grid>
      </>
  )
}

export default MovieList