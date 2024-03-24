import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Movie from '../Movie/Movie';
import {  useGetMoviesQuery } from '../../../../services/tmdb';
import { Box, Typography } from '@mui/material';
import MovieSkeleton from '../../../../ui/MovieSkeleton/MovieSkeleton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StarRateTwoTone } from '@mui/icons-material';

const MovieList = ({title}) => {
  const [page,sePage] = useState(1)
  const genre = useSelector(state=>state.genre.genre)
  const searchQuery = useSelector(state=>state.search.query)
  const category = useSelector(state=>state.category.category)
  const {data,error,isFetching} = useGetMoviesQuery({genre,category,searchQuery})

  if(isFetching ) return <Grid container spacing={{ xs: 2, md: 3 }}  sx={{width:'100%',marginTop:'40px',paddingBottom:'20px',paddingX:'15px'}}>
  {Array(20).fill('1').map((_, index) => (
       <Grid item key={index} xs={12} sm={4} md={3} >
        <MovieSkeleton></MovieSkeleton>
       </Grid>
     ))}
  </Grid> 

  if(error) return <Grid container xs={12} sm={4} md={2} >
  <div>Error</div>
  </Grid> 
 

 return (
    <>
    <Grid container spacing={{ xs: 1, md: 1 }} sx={{width:'100%',paddingBottom:'20px',paddingX:'15px'}} >
      {data.results?.map((movie, index) => (
        <Grid item key={movie.id} xs={12} sm={4} md={3} >
        <Movie movie={movie} isFetching={isFetching} ></Movie>
        </Grid>
      ))}
     </Grid>
      </>
  )
}

export default MovieList