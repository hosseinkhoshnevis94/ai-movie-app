import { Drawer, Typography } from '@mui/material'
import React from 'react'
import SideBar from '../../ui/components/SideBar/SideBar'
import Spinner from '../../ui/components/Spinner/Spinner'
import ScrollableBox from '../../ui/components/ScrollableBox/ScrollableBox'
import { useGetGenresQuery, useGetMoviesQuery } from '../../services/tmdb'
import MovieList from './components/MovieList/MovieList'
import GenreList from './GenreList/GenreList'

const Home = () => {

  
  return (
    <div>
      
      <GenreList></GenreList>
      <MovieList title={'New Movies:'}></MovieList>
      
    </div>
  )
}

export default Home