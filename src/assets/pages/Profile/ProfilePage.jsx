import React, { useEffect } from 'react'
import { useGetFavoriteMoviesQuery,  } from '../../services/tmdb'
import { Grid, Typography } from '@mui/material'
import Spinner from '../../ui/Spinner/Spinner'
import useScrollToTopOnLoad from '../../hooks/useScrollToTopOnLoad'
import RecommendedMovies from '../Movie/components/RecommendedMovies/RecommendedMovies'
import { useSelector } from 'react-redux'
import Movie from '../Home/components/Movie/Movie'
import Divider from '@mui/material/Divider';


const ProfilePage = () => {
  const {user} = useSelector(state=>state.user)
  const {data:favoriteMovies,refetch:refetchFavorites,isFetching} = useGetFavoriteMoviesQuery({listName:'favorite/movies',accountId:user.id,sessionId:localStorage.getItem('session_id'),page:1})
   
  useEffect(()=>{
    refetchFavorites()
  },[])

  return (
    <Grid container maxWidth={'xl'} sx={{padding:'0px 40px'}} >
    <Grid container columnSpacing={1} rowSpacing={2} sx={{marginTop:'55px'}}>
      <Grid item xs={12}><Typography gutterBottom variant="h6" component="h4">UserName: {user.username}</Typography></Grid>
      <Divider/>
      <Grid item xs={12}>
      <Typography gutterBottom variant="h6" component="h4">My Favorite Movies:</Typography>
      </Grid>
       {favoriteMovies?.results?.map((movie,i)=>
      <Grid item xs={3}>
       <Movie key={movie.id} movie={movie} isFetching={isFetching} ></Movie>
      </Grid>
     ) }
    </Grid>
    </Grid>
  )
}

export default ProfilePage