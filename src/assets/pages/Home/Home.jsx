import React from 'react'
import MovieList from './components/MovieList/MovieList'
import GenreList from './components/GenreList/GenreList'

const Home = () => {

  
  return (
    <div>
      
      <GenreList></GenreList>
      <MovieList filter={'now-playing'} title={'Now Playing'}></MovieList>
      <MovieList filter={'popular'} title={'Popular'}></MovieList>
      <MovieList filter={'top-rated'} title={'top Rated'}></MovieList>
      <MovieList filter={'upcoming'} title={'Upcoming'}></MovieList>
      
    </div>
  )
}

export default Home