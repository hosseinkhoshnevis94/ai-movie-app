import { Avatar, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useGetGenresQuery } from '../../services/tmdb';
import genresIcons from '../../../../public/genres/index'
import Spinner from '../Spinner/Spinner';
import { selectCategory } from '../../features/categorySlice';
import { selectGenre } from '../../features/genreSlice';
import SidebarButton from './SidebarButton';
import sideBarMenus from './sideBarMenus.js'

const SideBar = () => {
  const dispatch = useDispatch()
  const {data,isFetching} = useGetGenresQuery()
  const genreSelector= useSelector(state=>state.genre)
  const categorySelector= useSelector(state=>state.category)
  const currentGenreId = genreSelector.genre.id
  const currentCategory = categorySelector.category

   
  const handleClick =(slug) =>{
    dispatch(selectCategory(slug)),
    dispatch(selectGenre(0))
  }


 if(isFetching) return <Spinner></Spinner>
 
  return (
    <>

        <Box sx={{ width:'100%',flexDirection:'column', display:'flex',alignItems:'center',justifyContent:'center',gap:'5px', fontSize:"15px",marginBottom:'20px', color:"black"}}>
          {sideBarMenus.map(item=><SidebarButton key={item.text} slug={item.slug} currentCategory={currentCategory} text={item.text} onClick={()=>handleClick(item.slug)} />)}
        </Box>
      <List  sx={{ padding:'5px 10px',backgroundColor:'#00DBDE00',backgroundImage:' linear-gradient(90deg, #00dbde61 0%, #fc00ff6e 100%);',borderRadius:'15px', width:'90%',margin:"auto"}} >
        {data?.genres.map((genre,index) => 
          <ListItem  key={genre.id} onClick={()=>{dispatch(selectGenre(genre)),dispatch(selectCategory(''))}} sx={{display:'flex' ,marginBottom:'5px',justifyContent:'center',gap:"5px",transition:'all 0.1s', transform:`${currentGenreId==genre.id && 'translate(6px)'}`, cursor:'pointer',alignItems:"center",padding:'10px',borderRadius:'10px',backgroundImage:`${currentGenreId==genre.id && "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"} `,'&:hover':{backgroundColor:'#FBAB7E',backgroundImage:'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'}}} >
              <Avatar alt="" src={genresIcons[genre.name.toLowerCase()]} />
              <Typography>{genre.name}</Typography>
              <ListItemText  />
          </ListItem>
        )}
      </List>
    </>
  )
}

export default SideBar