import React from 'react'

const ProfilePage = () => {
  return (
    <Grid container maxWidth={'xl'} sx={{padding:'0px 40px'}} >
    {movie && <MovieDetails movie={movie}></MovieDetails>}
    {recommendedMoviesResults?.length>0 && <RecommendedMovies movies={recommendedMoviesResults} isFetching={isFetchingRecommendedmovies}></RecommendedMovies>}
    </Grid>
  )
}

export default ProfilePage