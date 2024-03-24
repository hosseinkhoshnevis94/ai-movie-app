import React, { useState } from 'react'
import MovieDetails from './components/MovieDetails/MovieDetails'
import { useParams } from 'react-router-dom'
import { useGetMovieQuery, useGetRecommendationMoviesQuery } from '../../services/tmdb'
import styles from './styles.module.css'
import { Container, Grid, Typography } from '@mui/material'
import Movie from '../Home/components/Movie/Movie'
import RecommendationMovies from './components/RecommendationMovies/RecommendationMovies'
import Spinner from '../../ui/Spinner/Spinner'
import useScrollToTopOnLoad from '../../ui/ScrollToTop/useScrollToTopOnLoad'

const MoviePage = () => {
  const {id} = useParams()
  const {data,isFetching,isLoading} = useGetMovieQuery(id)
  const {data:recommendationMovies,isFetching:isFetchingRecommendationmovies,isLoading:isLoadingRecommendationMovies} = useGetRecommendationMoviesQuery({movieId:id,list:'recommendations'})
  const r = recommendationMovies?.results.slice(0,12)
  useScrollToTopOnLoad([id],0);
 




  if(isFetching && isFetchingRecommendationmovies) return <Grid container maxWidth={'xl'}  sx={{padding:'0px 40px',minHeight:'100vh'}} >
    <Grid item xs={12}>
    <Spinner></Spinner>
    </Grid>
  </Grid>

  return (
    <Grid container maxWidth={'xl'} sx={{padding:'0px 40px'}} >

   {data&& <MovieDetails movie={data}></MovieDetails>}
    {r && <RecommendationMovies movies={r} isFetching={isFetchingRecommendationmovies}></RecommendationMovies>}
    </Grid>
  )
}

export default MoviePage