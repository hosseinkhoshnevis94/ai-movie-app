import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetActorQuery, useGetMoviesByActorIdQuery, useGetRecommendationMoviesQuery } from '../../services/tmdb'
import { Grid } from '@mui/material'
import ActorDetails from './components/ActorDetails/ActorDetails'
import RecommendationMovies from '../Movie/components/RecommendationMovies/RecommendationMovies'
import styles from './styles.module.css'
import ActorMovies from './components/ActorMovies/ActorMovies'

const ActorPage = () => {
  const [page,setPage] =useState(1)
  const {id} = useParams()
  const {data,isFetching} =useGetActorQuery(id)
  const {data:rr} = useGetMoviesByActorIdQuery(id)
  // const {data:recommendationMovies,isFetching:isFetchingRecommendationmovies,isLoading:isLoadingRecommendationMovies} = useGetRecommendationMoviesQuery({movieId:id,list:'recommendations'})
  const r = rr?.cast
  console.log(r);


  if(isFetching) return <div>is loading...</div>
  return (
    <Grid container maxWidth={'xl'} className={styles.actorPageContainer}  >
    <ActorDetails actorData={data}></ActorDetails>
    {r && <ActorMovies movies={r} actorName={data?.name} ></ActorMovies>}
    </Grid>
  )
}

export default ActorPage