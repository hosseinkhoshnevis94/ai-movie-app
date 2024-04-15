import { Grid, Pagination, Typography } from '@mui/material';
import React, { useState } from 'react';
import Movie from '../../../Home/components/Movie/Movie';
import useScrollToTop from '../../../../hooks/ScrollToTop';

const ActorMovies = ({ movies, isFetching, actorName }) => {
  const [page, setPage] = useState(1);
  useScrollToTop(page,500)
  const pageSize = 12;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentMovies = movies.slice(startIndex, endIndex);

  const handleChangePage = (event, value) => {
    setPage(value);
  };
 
  
  return (
    <Grid container columnSpacing={1} rowSpacing={2} sx={{ marginTop: '55px' }}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h6" component="h4">
          {actorName} movies:
        </Typography>
      </Grid>
      {currentMovies.map((movie) => (
        <Grid item xs={3} key={movie.id}>
          <Movie movie={movie} isFetching={isFetching} />
        </Grid>
      ))}
      <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
        <Pagination color="primary" page={page} count={Math.ceil(movies.length / pageSize)} onChange={handleChangePage} variant="outlined" shape="rounded" />
      </Grid>
    </Grid>
  );
};

export default ActorMovies;
