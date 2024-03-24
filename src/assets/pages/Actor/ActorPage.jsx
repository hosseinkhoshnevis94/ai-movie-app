import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetActorQuery, useGetMoviesByActorIdQuery, useGetRecommendationMoviesQuery } from '../../services/tmdb'
import { Grid } from '@mui/material'
import ActorDetails from './components/ActorDetails/ActorDetails'
import RecommendationMovies from '../Movie/components/RecommendationMovies/RecommendationMovies'

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
    <Grid container maxWidth={'xl'} sx={{padding:'0px 40px'}} >
    <ActorDetails actorData={data}></ActorDetails>
    {r && <RecommendationMovies movies={r} ></RecommendationMovies>}
    </Grid>
  )
}

export default ActorPage