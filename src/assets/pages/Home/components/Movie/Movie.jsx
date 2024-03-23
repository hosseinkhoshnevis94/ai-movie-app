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
    const {id,title,backdrop_path,poster_path,release_date,vote_average,overview    } = movie
  return (
    <Fade in timeout={1000} >
    <Card sx={{borderRadius:"30px"}} >
    <Link to={`/movie/${id}`}>
    <CardMedia
     component="img"
     height="350"
     image={`https://image.tmdb.org/t/p/w342/${poster_path}`}
     alt={title}
     />
     </Link>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       Release Data: {release_date}
      </Typography>
      <Tooltip title={`${vote_average.toFixed(1)}/10`} placement="bottom">
      <Box sx={{display:'flex',alignItems:"center",justifyContent:"start",gap:'4px'}}>
      <Typography variant="body2" color="text.secondary">Score:</Typography>
      <Rating  name="read-only" value={vote_average/2} readOnly precision={0.5} size="small" />
      </Box>
      </Tooltip>
      {/* <Typography variant="body2" color="text.secondary" sx={{marginTop:"8px",whiteSpace:'wrap'}}>
        overview: {overview.length > 150 ? overview.slice(0,150) : overview}...
      </Typography> */}
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