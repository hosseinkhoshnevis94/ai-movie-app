import { Avatar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useDispatch, useSelector } from 'react-redux';
import { useGetGenresQuery } from '../../services/tmdb';
import genresIcons from '../../../../public/genres/index'
import { selectGenre } from '../../../features/genreSlice';


const SideBar = () => {
  const dispatch = useDispatch()
  const {data,isLoading} = useGetGenresQuery()
  const selector= useSelector(state=>state.genre)
  if(isLoading) return <div>loading...</div>


 
  return (
    <>
     <Toolbar sx={{marginTop:"35px"}}/>
      <List  sx={{ padding:'5px 10px',backgroundColor:'#00DBDE',backgroundImage:' linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',borderRadius:'15px', width:'90%',margin:"auto"}} >
        {data?.genres.map((genre,index) => 
          <ListItem  key={genre.id} onClick={()=>{dispatch(selectGenre(Number(genre.id)));console.log(genre.name);}} sx={{display:'flex',justifyContent:'center',gap:"5px",cursor:'pointer',alignItems:"center",padding:'10px',borderRadius:'10px','&:hover':{backgroundColor:'#FBAB7E',backgroundImage:'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'}}} >
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