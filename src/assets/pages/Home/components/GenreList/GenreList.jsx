import React from 'react'
import { useGetGenresQuery } from '../../../../services/tmdb'
import { Avatar, Box } from '@mui/material'
import genresIcons from '../../../../../../public/genres'
import { useDispatch } from 'react-redux'


const GenreList = () => {
  const dispatch = useDispatch()
  const {data} = useGetGenresQuery()

  return (
    <Box sx={{display:'flex',justifyContent:'flex-start',alignItems:"center",padding:'10px 15px',flexWrap:'wrap',borderRadius:'16px',gap:'6px',backgroundColor:'#D9AFD9',backgroundImage:'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',}}>
     {data?.genres.map((genre,index)=>
     <Box key={genre.id} onClick={()=>{dispatch(selectGenre(Number(genre)))}} sx={{display:'flex',flexDirection:"column",justifyContent:'space-between',cursor:'pointer',alignItems:"center",padding:'16px',borderRadius:'10px','&:hover':{backgroundColor:'#FBAB7E',backgroundImage:'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'}}}>
     <Avatar alt="Remy Sharp" src={genresIcons[genre.name.toLowerCase()]} />
      <div>{genre.name}</div>
     </Box>
     )}
    </Box>
  )
}

export default GenreList