import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Fade, Grow, Rating, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

const Movie = ({movie}) => {
    const {id,title,poster_path,release_date,vote_average} = movie
  return (
    <Fade in timeout={1000} >
    <Card sx={{borderRadius:"30px"}} >
    <Link to={`/movie/${id}`}>
    <CardMedia
     component="img"
     height="320"
     image={poster_path && `https://image.tmdb.org/t/p/w342/${poster_path}`}
     alt={title}
     />
     </Link>
    <CardContent>
      <Typography sx={{fontSize:'18px'}} gutterBottom variant="h4" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       Release Data: {release_date}
      </Typography>
      <Tooltip title={`${vote_average.toFixed(1)}/10`} placement="bottom">
      <Box sx={{display:'flex',alignItems:"center",justifyContent:"start",gap:'4px'}}>
      <Typography variant="body2" >Score:</Typography>
      <Rating  name="read-only" value={vote_average/2} readOnly precision={0.5} size="small" />
      </Box>
      </Tooltip>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  </Fade>
  )
}

export default Movie