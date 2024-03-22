import React from 'react'
import MovieList from './components/MovieList/MovieList'
import GenreList from './components/GenreList/GenreList'

const Home = () => {

  
  return (
    <div>
      
      <GenreList></GenreList>
      <MovieList title={'New Movies:'}></MovieList>
      
    </div>
  )
}

export default Home