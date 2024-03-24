import React from 'react'
import MovieDetails from './components/MovieDetails/MovieDetails'
import { useParams } from 'react-router-dom'
import { useGetMovieQuery, useGetRecommendationMoviesQuery } from '../../services/tmdb'
import styles from './styles.module.css'
import useScrollToTopOnLoad from '../../ui/ScrollToTop/ScrollToTop'
import { Container, Grid } from '@mui/material'
import Movie from '../Home/components/Movie/Movie'
import RecommendationMovies from './components/RecommendationMovies/RecommendationMovies'

const MoviePage = () => {
  useScrollToTopOnLoad();
  const {id} = useParams()
  const {data,isFetching} = useGetMovieQuery(id)
  const {data:recommendationMovies,isFetching:isFetchingRecomendationmovies} = useGetRecommendationMoviesQuery({movieId:id,list:'recommendations'})
  const r = recommendationMovies?.results
  console.log(r);
   if(isFetching && isFetchingRecomendationmovies) return <div>loading...</div>

  return (
    <Grid container maxWidth={'xl'} sx={{padding:'0px 40px'}} >
    <MovieDetails movie={data}></MovieDetails>
   {r && <RecommendationMovies movies={r} isFetching={isFetchingRecomendationmovies}></RecommendationMovies>}
    </Grid>
  )
}

export default MoviePage