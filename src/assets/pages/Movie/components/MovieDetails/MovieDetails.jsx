import { Avatar, Box, Button, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../styles.module.css'
import Grid from '@mui/material/Grid';
import LanguageIcon from '@mui/icons-material/Language';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MovieDetails = ({movie}) => {
  const {poster_path,backdrop_path,title,overview ,imdb_id,vote_average,tagline,spoken_languages,genres,homepage,release_date,runtime,credits}= movie
  const [isFavorite,setIsFavorite] = useState(false)
  const addFavorite = () =>{
    setIsFavorite(p=>!p)
  }
  return (
    <>
    <Grid container spacing={2}>
    <img className={styles.backdropImage} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" />
      <Grid  item xs={12} md={4}>
      <img className={styles.posterImage} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
      </Grid>
      <Grid item  xs={12} md={8} sx={{color:'black'}}>
        <Grid container rowGap={3} >
          <Grid item xs={9}>
          <Typography  variant="h3" >{title}</Typography>
          <Typography  variant="body1" >{tagline}</Typography>
          </Grid>
          <Grid item xs={3}>
          <Rating name="read-only" value={vote_average/2} readOnly precision={0.5}  />
          <Typography  variant="body1" >{vote_average}/10 | {runtime} min</Typography>
          </Grid>
          <Grid  item xs={9}>
          <Typography sx={{fontSize:"20px"}} variant="body1" component={'span'} >Genre: </Typography>
          {genres.map((genre,index)=> 
           <Typography component={'span'} >{genre.name},</Typography>
           )}
          </Grid>
          <Grid item xs={3}>
          <Button onClick={addFavorite} variant="outlined" startIcon={isFavorite ? <FavoriteBorderIcon />: <FavoriteIcon/> } sx={{marginX:'5px'}} >{isFavorite ?'Add' : "Remove"}</Button>
          </Grid>
          <Grid item xs={12}>
          <Typography sx={{fontSize:"20px"}} variant="body1" component={'p'} >Overview: </Typography>
          <Typography  variant="body1" component={'span'} >{overview}</Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography sx={{fontSize:"20px"}} variant="body1" component={'p'} >Top casts: </Typography>
          <Box sx={{display:'flex',justifyContent:'flex-start',gap:'25px',alignItems:"center",marginTop:'10px'}}>
           {credits.cast.slice(0,6).map((cast,index)=> 
          <Box sx={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:"center"}}>
            <Avatar   sx={{ width: 74, height: 74 }} src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} ></Avatar>
            <Typography>{cast.name}</Typography>
            </Box>
            )}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{display:'flex',justifyContent:'flex-start',gap:'15px',alignItems:"center",marginTop:'10px'}}>
          <Button variant="outlined" href={homepage} target={'_blank'} startIcon={<LanguageIcon />}>Website</Button>
          <Button variant="outlined" target={'_blank'} href={`http://imdb.com/title/${imdb_id}`} startIcon={<TheaterComedyIcon />}>IMDB</Button>
          <Button variant="outlined" startIcon={<OndemandVideoIcon />}>Trailer</Button>
            </Box>

          </Grid>


        </Grid>


      </Grid>

    </Grid>
    </>
  )
}

export default MovieDetails