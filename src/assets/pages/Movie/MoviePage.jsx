import React from 'react'
import MovieDetails from './components/MovieDetails/MovieDetails'
import { useParams } from 'react-router-dom'
import { useGetMovieQuery } from '../../services/tmdb'
import styles from './styles.module.css'
import useScrollToTopOnLoad from '../../ui/ScrollToTop/ScrollToTop'
import { Container, Grid } from '@mui/material'

const MoviePage = () => {
  useScrollToTopOnLoad();
  const {id} = useParams()
  const {data,isFetching} = useGetMovieQuery(id)
  console.log(data);

if(isFetching) return <div>loading...</div>

  return (
    <Grid container maxWidth={'xl'} sx={{padding:'0px 40px'}} >
    <MovieDetails movie={data}></MovieDetails>
    </Grid>
  )
}

export default MoviePage