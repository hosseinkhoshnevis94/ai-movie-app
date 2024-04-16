import { Avatar, Box, Button, Fade, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from '../../styles.module.css'
import Grid from '@mui/material/Grid';
import LanguageIcon from '@mui/icons-material/Language';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Modal from '@mui/material/Modal';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {  useGetFavoriteMoviesQuery } from '../../../../services/tmdb';

const baseUrl =import.meta.env.VITE_TMDB_MOVIE_BASEURL
const tmdbApiKey =import.meta.env.VITE_TMDB_MOVIE_API_KEY

const MovieDetails = ({movie}) => {
  const {poster_path,backdrop_path,title,overview ,imdb_id,vote_average,tagline,spoken_languages,genres,homepage,release_date,runtime,credits,videos}= movie
  const {id} = useParams()
  const[openModal,setOpenModal] = useState(false)
  const [isFavorite,setIsFavorite] = useState(false)
  const {user} = useSelector(state=>state.user)
  const {data:favoriteMovies,refetch:refetchFavorites} = useGetFavoriteMoviesQuery({listName:'favorite/movies',accountId:user.id,sessionId:localStorage.getItem('session_id'),page:1})
  
  useEffect(()=>{
  const isMovieFavorite = favoriteMovies?.results?.find(movie=> movie?.id == id)
  setIsFavorite(isMovieFavorite)
  refetchFavorites()
 },[favoriteMovies])

  const addFavorite = async () =>{
    try{
      await axios.post(`${baseUrl}/account/${user.id}/favorite?api_key=${tmdbApiKey}&session_id=${localStorage.getItem('session_id')}`,{
        media_type:'movie',
        media_id:id,
        favorite: !isFavorite
      })
      setIsFavorite(prev=>!prev)
    }catch(error){
      throw new Error(error)
    }
  }
  const handleCloseModal = () =>{
    setOpenModal(prev=>!prev)
  }
  const handleOpenModal = () =>{
    setOpenModal(true)
  }

  return (
    <>
    <Grid container spacing={2}>
    <Modal
     open={openModal}
     onClose={handleCloseModal}
     sx={{display:'flex',justifyContent:"center",alignItems:"center",zIndex:'999999'}}
>
    <Fade in={openModal}>
    <iframe autoPlay  style={{ width: '60vw',height:'80vh', }}  src={`https://www.youtube.com/embed/${videos?.results[1]?.key}`} frameborder="0"></iframe>
    </Fade>

    </Modal>
    {backdrop_path ? <img className={styles.backdropImage} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" /> :
    <div className={styles.noImageBackdrop}></div>
  }
      <Grid  item xs={12} md={4}>
     {poster_path ? <img className={styles.posterImage} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" /> :
     <div className={styles.noImagePoster}></div>
     
     }
      </Grid>
      <Grid item  xs={12} md={8} >
        <Grid container rowGap={3} >
          <Grid item xs={8}>
          <Typography  variant="h3" >{title}</Typography>
          <Typography  variant="body1"  >{tagline}</Typography>
          </Grid>
          <Grid item xs={4} sx={{textAlign:"right"}}>
          <Rating name="read-only" value={vote_average/2} readOnly precision={0.5}  />
          <Typography  variant="body1" > {runtime} min | {new Date(release_date).getFullYear()} | {vote_average.toFixed(1)}/10 IMDB </Typography>
          </Grid>
          <Grid  item xs={8}>
          <Typography sx={{fontSize:"20px"}} variant="body1" component={'span'} >Genre: </Typography>
          {genres.map((genre,index)=> 
           <Typography component={'span'} >{genre.name},</Typography>
           )}
          </Grid>
          <Grid item xs={2}>
          <Button onClick={addFavorite} variant="" startIcon={isFavorite ?<FavoriteIcon/> : <FavoriteBorderIcon />} 
          sx={{marginX:'5px',color:`${isFavorite && '#faaf00'}`}} >{isFavorite ?'Remove' : "Add"}</Button>
          </Grid>
          <Grid item xs={2}>
          <Button variant="contained" color='error' onClick={handleOpenModal} startIcon={<OndemandVideoIcon />}>Trailer</Button>
          </Grid>
          <Grid item xs={12}>
          <Typography sx={{fontSize:"20px"}} variant="body1" component={'p'} >Overview: </Typography>
          <Typography  variant="body1" component={'span'} >{overview}</Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography sx={{fontSize:"20px"}} variant="body1" component={'p'} >Top casts: </Typography>
          <Box sx={{display:'flex',justifyContent:'flex-start',gap:'25px',alignItems:"center",marginTop:'10px'}}>
           {credits.cast.slice(0,6).map((cast,index)=> 
           <Link to={`/actor/${cast.id}`}>
          <Box sx={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:"center"}}>
            <Avatar   sx={{ width: 74, height: 74,}} src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} ></Avatar>
            <Typography sx={{textAlign:"center"}}>{cast.name}</Typography>
            </Box>
           </Link>
            )}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{display:'flex',justifyContent:'flex-start',gap:'15px',alignItems:"center",marginTop:'10px'}}>
          <Button variant="text" href={homepage} target={'_blank'} startIcon={<LanguageIcon />}>Website</Button>
          <Button variant="text" target={'_blank'} href={`http://imdb.com/title/${imdb_id}`} startIcon={<TheaterComedyIcon />}>IMDB</Button>
            </Box>

          </Grid>


        </Grid>


      </Grid>

    </Grid>
    </>
  )
}

export default MovieDetails