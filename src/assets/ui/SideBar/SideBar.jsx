import { Avatar, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useGetGenresQuery } from '../../services/tmdb';
import genresIcons from '../../../../public/genres/index'

import Spinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { selectCategory } from '../../features/categorySlice';
import { selectGenre } from '../../features/genreSlice';


const SideBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {data,isFetching} = useGetGenresQuery()
  const genreSelector= useSelector(state=>state.genre)
  const categorySelector= useSelector(state=>state.category)
  const currentGenreId = genreSelector.genre.id
  const currentCategory = categorySelector.category

 if(isFetching) return <Spinner></Spinner>
 
  return (
    <>

        <Box sx={{ width:'100%',flexDirection:'column', display:'flex',alignItems:'center',justifyContent:'center',gap:'5px', fontSize:"15px",marginBottom:'20px', color:"black"}}>
       <Typography  onClick={()=>{dispatch(selectCategory('popular')),dispatch(selectGenre(0)),navigate('/')}} sx={{width:"150px",display:'flex',flexDirection:"column",transition:'all 0.1s',justifyContent:'space-between',cursor:'pointer',alignItems:"center",padding:'16px',borderRadius:'10px',transform:`${currentCategory=='popular' && 'translate(10px)'}`,backgroundColor:'#D9AFD9',backgroundImage:`${currentCategory=='popular' && "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"} `,'&:hover':{backgroundColor:'#FBAB7E',backgroundImage:'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'}}} variant="body1" color="initial" >Popular</Typography>
       <Typography onClick={()=>{dispatch(selectCategory('upcoming')),dispatch(selectGenre(0))}} sx={{width:"150px",display:'flex',flexDirection:"column",transition:'all 0.1s',justifyContent:'space-between',cursor:'pointer',alignItems:"center",padding:'16px',borderRadius:'10px',transform:`${currentCategory=='upcoming' && 'translate(10px)'}`,backgroundColor:'#D9AFD9',backgroundImage:`${currentCategory=='upcoming' && "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"} `,'&:hover':{backgroundColor:'#FBAB7E',backgroundImage:'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'}}} variant="body1" color="initial" >Upcoming</Typography>
       <Typography onClick={()=>{dispatch(selectCategory('top-rated')),dispatch(selectGenre(0))}} sx={{width:"150px",display:'flex',flexDirection:"column",transition:'all 0.1s',justifyContent:'space-between',cursor:'pointer',alignItems:"center",padding:'16px',borderRadius:'10px',transform:`${currentCategory=='top-rated' && 'translate(10px)'}`,backgroundColor:'#D9AFD9',backgroundImage:`${currentCategory=='top-rated' && "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"} `,'&:hover':{backgroundColor:'#FBAB7E',backgroundImage:'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'}}} variant="body1" color="initial" >Top rated</Typography>
       <Typography onClick={()=>{dispatch(selectCategory('now-playing')),dispatch(selectGenre(0))}} sx={{width:"150px",display:'flex',flexDirection:"column",transition:'all 0.1s',justifyContent:'space-between',cursor:'pointer',alignItems:"center",padding:'16px',borderRadius:'10px',transform:`${currentCategory=='now-playing' && 'translate(10px)'}`,backgroundColor:'#D9AFD9',backgroundImage:`${currentCategory=='now-playing' && "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"} `,'&:hover':{backgroundColor:'#FBAB7E',backgroundImage:'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'}}} variant="body1" color="initial" >Now playing</Typography>
        </Box>
      <List  sx={{ padding:'5px 10px',backgroundColor:'#00DBDE00',backgroundImage:' linear-gradient(90deg, #00dbde61 0%, #fc00ff6e 100%);',borderRadius:'15px', width:'90%',margin:"auto"}} >
        {data?.genres.map((genre,index) => 
          <ListItem  key={genre.id} onClick={()=>{dispatch(selectGenre(genre)),dispatch(selectCategory(''))}} sx={{display:'flex' ,marginBottom:'5px',justifyContent:'center',gap:"5px",transition:'all 0.1s', transform:`${currentGenreId==genre.id && 'translate(6px)'}`, cursor:'pointer',alignItems:"center",padding:'10px',borderRadius:'10px',backgroundImage:`${currentGenreId==genre.id && "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"} `,'&:hover':{backgroundColor:'#FBAB7E',backgroundImage:'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'}}} >
              <Avatar alt="" src={genresIcons[genre.name.toLowerCase()]} />
              <div>{genre.name}</div>
              <ListItemText  />
          </ListItem>
        )}
      </List>
    </>
  )
}

export default SideBar