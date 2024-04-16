import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Movie from '../Movie/Movie';
import {  useGetMoviesQuery } from '../../../../services/tmdb';
import { Box, Pagination, Typography } from '@mui/material';
import MovieSkeleton from '../../../../ui/MovieSkeleton/MovieSkeleton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StarRateTwoTone } from '@mui/icons-material';
import useScrollToTopOnLoad from '../../../../hooks/useScrollToTopOnLoad';

const MovieList = () => {
  const [page,setPage] = useState(1)
  const genre = useSelector(state=>state.searchGenreCategorySlice.genre)
  const searchQuery = useSelector(state=>state.searchGenreCategorySlice.searchQuery)
  const category = useSelector(state=>state.searchGenreCategorySlice.category)
  const {data:movies,error,isFetching} = useGetMoviesQuery({genre,category,searchQuery,page})
  useScrollToTopOnLoad([page,genre,category,searchQuery],0)

  const handleChangePage = (event, value) => {
    setPage(value);
  };
  // Reset page to 1 when searchQuery changes
  useEffect(() => {
    setPage(1); 
  }, [searchQuery]);


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
      {movies?.results?.map((movie, index) => (
        <Grid item key={movie.id} xs={12} sm={4} md={3} >
        <Movie movie={movie} isFetching={isFetching} ></Movie>
        </Grid>
      ))}
      <Grid item xs={12} sx={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'30px'}}>
      <Pagination color="primary" page={page}  count={movies?.total_pages} onChange={handleChangePage} variant="outlined" shape="rounded" />
      </Grid>
     </Grid>
      </>
  )
}

export default MovieList