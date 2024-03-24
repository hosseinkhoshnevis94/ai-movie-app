import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import styles from '../../styles.module.css'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

const ActorDetails = ({actorData}) => {
    const {name,biography,profile_path,birthday,place_of_birth ,deathday,imdb_id} = actorData
  return (
    <Grid container spacing={4}>
     <Grid  item xs={3} >
     {profile_path ? <img className={styles.actorPosterImage} src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt="" /> :
     <div className={styles.actorNoImagePoster}></div>
     }
      </Grid>
     <Grid item xs={9} rowSpacing={2}>
     <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h3">{name}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">{place_of_birth}  </Typography>
        <Typography variant="body2">{new Date(birthday).toDateString() } </Typography>
        {deathday && <Typography variant="body2">{new Date(deathday).toDateString() } </Typography>}     
        </Grid>
      <Grid item>
        <Typography variant="body1">{biography}</Typography>
      </Grid>
      <Grid item>
      <Button variant="outlined" target={'_blank'} href={`http://imdb.com/name/${imdb_id}`} startIcon={<TheaterComedyIcon />}>IMDB</Button>
      </Grid>
    </Grid>
     </Grid>
    </Grid>
  )
}

export default ActorDetails