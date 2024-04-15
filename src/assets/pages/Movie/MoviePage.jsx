import React, { useState } from 'react'
import MovieDetails from './components/MovieDetails/MovieDetails'
import { useParams } from 'react-router-dom'
import { useGetMovieQuery, useGetRecommendationMoviesQuery } from '../../services/tmdb'
import { Grid } from '@mui/material'
import Movie from '../Home/components/Movie/Movie'
import RecommendedMovies from './components/RecommendedMovies/RecommendedMovies'
import Spinner from '../../ui/Spinner/Spinner'
import useScrollToTopOnLoad from '../../hooks/useScrollToTopOnLoad'

const MoviePage = () => {
  const {id} = useParams()
  const {data:movie,isFetching} = useGetMovieQuery(id)
  const {data:recommendedMovies,isFetching:isFetchingRecommendedmovies,isLoading:isLoadingRecommendationMovies} = useGetRecommendationMoviesQuery({movieId:id,list:'recommendations'})
  const recommendedMoviesResults = recommendedMovies?.results.slice(0,12)
  useScrollToTopOnLoad([id],0);
 




  if(isFetching && isFetchingRecommendedmovies) return 
  <Grid container maxWidth={'xl'}  sx={{padding:'0px 40px',minHeight:'100vh'}} >
    <Grid item xs={12}>
    <Spinner></Spinner>
    </Grid>
  </Grid>

  return (
    <Grid container maxWidth={'xl'} sx={{padding:'0px 40px'}} >
    {movie && <MovieDetails movie={movie}></MovieDetails>}
    {recommendedMoviesResults?.length>0 && <RecommendedMovies movies={recommendedMoviesResults} isFetching={isFetchingRecommendedmovies}></RecommendedMovies>}
    </Grid>
  )
}

export default MoviePage