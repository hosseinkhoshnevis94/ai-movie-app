import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetActorQuery, useGetMoviesByActorIdQuery } from '../../services/tmdb'
import { Grid } from '@mui/material'
import ActorDetails from './components/ActorDetails/ActorDetails'
import styles from './styles.module.css'
import ActorMovies from './components/ActorMovies/ActorMovies'
import useScrollToTopOnLoad from '../../hooks/useScrollToTopOnLoad'

const ActorPage = () => {
  const {id} = useParams()
  const {data:actorData,isFetching} =useGetActorQuery(id)
  const {data:actorMovies} = useGetMoviesByActorIdQuery(id)
  const actorMoviesResults = actorMovies?.cast
  useScrollToTopOnLoad([id],0)


  if(isFetching) return <div>is loading...</div>
  return (
    <Grid container maxWidth={'xl'} className={styles.actorPageContainer}  >
    <ActorDetails actorData={actorData}></ActorDetails>
    {actorMoviesResults?.length > 0 && <ActorMovies movies={actorMoviesResults} actorName={actorData?.name} ></ActorMovies>}
    </Grid>
  )
}

export default ActorPage