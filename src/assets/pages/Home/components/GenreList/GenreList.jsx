import React, { useState } from 'react'
import { useGetGenresQuery } from '../../../../services/tmdb'
import { Avatar, Box } from '@mui/material'
import genresIcons from '../../../../../../public/genres'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { selectGenre } from '../../../../../features/genreSlice'


const GenreList = () => {
  const dispatch = useDispatch()
  const {data,isLoading} = useGetGenresQuery()
  // console.log(genreName);
    

if(isLoading) return <div>loading...</div>

  return (
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:"center",overflowX:'auto',padding:'10px 15px',border:"1px solid #db9595",borderRadius:"15px",columnGap:'10px'}}>
     {data.genres.map((genre,index)=>
    //  <Link to={'/genres/:id'}>
     <Box key={genre.id} onClick={()=>{dispatch(selectGenre(Number(genre.id)));console.log(genre.name);}} sx={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:"center"}}>
     <Avatar alt="Remy Sharp" src={genresIcons[genre.name.toLowerCase()]} />
      <div>{genre.name}</div>
     </Box>
    //  </Link>
     )}
    </Box>
  )
}

export default GenreList