import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Movie from '../Movie/Movie';
import {  useGetMoviesQuery } from '../../../../services/tmdb';
import { Typography } from '@mui/material';
import MovieSkeleton from '../../../../ui/MovieSkeleton/MovieSkeleton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MovieList = ({title,filter}) => {
  const [page,sePage] = useState(1)
  const genreName = useSelector(state=>state.genre.genre)
  const {data,error,isLoading} = useGetMoviesQuery({genreName,filter})

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
    <Grid container spacing={{ xs: 1, md: 1 }} sx={{width:'100%',marginTop:'40px',paddingBottom:'20px',paddingX:'15px'}} >
      <Grid xs={12} sx={{display:'flex',alignItems:"center",justifyContent:'space-between'}} >
       <Typography variant="h2" color="initial" sx={{fontSize:"20px",fontWeight:'bold',marginBottom:'20px', color:"black",paddingLeft:"6px",letterSpacing:"5px"}}>{title}</Typography>
       <Link>
      <Typography variant="body1" color="initial" sx={{fontSize:"15px",fontWeight:'bold',marginBottom:'20px', color:"black"}}>All {title.toLowerCase()} movies</Typography>
       </Link>
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