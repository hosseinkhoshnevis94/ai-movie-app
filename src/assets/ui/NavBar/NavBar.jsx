import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { LogoImage, Search,StyledInputBase } from './styles';
import { useTheme } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { Container, useMediaQuery } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { useColorModeContext } from '../../utils/ToggleDarkMode';
import { fetchToken,movieApi,createSessionId } from '../../utils/fetchToken';
import {setUser} from '../../redux/auth'
import { resetAll, searchMovie} from '../../redux/searchGenreCategorySlice';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [searchQuery,setSearchQuery] = useState('')
  const [openNavBar,setOpenNavBar] = useState(true)
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:600px)')
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const {isAuthenticated,user} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const colorMode = useColorModeContext()
  const token = localStorage.getItem('request_token')
  const sessionIdFromLocalStorage = localStorage.getItem('session_id')

  useEffect(()=>{
    const loginUser = async () =>{
      if(token){
        if(sessionIdFromLocalStorage){
         const {data:userData} = await movieApi.get(`/account?session_id=${sessionIdFromLocalStorage}`)
         dispatch(setUser(userData))

        }else{
           const session_id = await createSessionId()
           const {data:userData} = await movieApi.get(`/account?session_id=${session_id}`)
           dispatch(setUser(userData))

        }
      }
    }
    loginUser()
  },[token])


  const handleSearch = () =>{
    dispatch(searchMovie(searchQuery))
    navigate('/')
  }
  const handleRemoveSearchQuery = () =>{
    setSearchQuery('')
    dispatch(resetAll())
    
  }
  const handleSearchByKey =(e) =>{
    if(e.key=='Enter'){
      navigate('/')
      dispatch(searchMovie(searchQuery))
    }
  }
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate(`profile/${user.id}`)
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const toggleDrawer = () =>{
    setOpenNavBar(prev=>!prev)
  }

  const toggleColorMode = () =>{
    colorMode.toggleColorMode()
  }
   
  const handleLogin = () =>{
    fetchToken()
  }
  const handleLogout = () =>{
    localStorage.clear()
    navigate(0)
  }
  const handleClickLogo =() =>{
    dispatch(resetAll())
    setSearchQuery('')
    navigate('/')
  }
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{top:"10px",zIndex:'999999999999'}}

      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{zIndex:'999999999999'}}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem >
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{position:'sticky',top:'10px',width:{ xs: '90%', md: '85%' },margin:'auto',zIndex:"999999",}}>
      <AppBar position="static" sx={{backgroundColor:'rgb(207 207 257 / 50%)',backdropFilter:'blur(9px);',borderRadius:'15px'}}>
        <Container maxWidth='xl'  >
        <Toolbar sx={{display:'flex',justifyContent:"space-between",alignItems:"center" , height:'80px',}}>
         {isMobile && <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, }}
          >
            <MenuIcon onClick={toggleDrawer} />
          </IconButton>}
          
          <Box onClick={handleClickLogo} sx={{justifyContent:'center',alignItems:'end',cursor:'pointer',gap:2 ,display: { xs: 'none', md: 'flex' }}} >
          <LogoImage src="/logo.png" alt="movie"   />
          <Typography variant='caption' color={'initial'} fontFamily={'Chilanka'}>AI Powered !</Typography> 
            </Box>

          <Search >
              <SearchIcon onClick={handleSearch} sx={{height:'100%',cursor:"pointer"}} /> 
            <StyledInputBase
              placeholder="Search…"
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
              onKeyDown={handleSearchByKey}
              inputProps={{ 'aria-label': 'search' }}
            />
            <CloseIcon onClick={handleRemoveSearchQuery} sx={{height:'100%',cursor:"pointer"}} />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           { isAuthenticated ? <>

            <IconButton onClick={toggleColorMode} size="large" aria-label="show 4 new mails" >
            {theme.palette.mode=='dark' ?  <LightModeIcon/> : <NightlightIcon/>}
            </IconButton>
            <IconButton   size="large" aria-label="show 4 new mails" >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
                            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              
              >
              <AccountCircle />
            </IconButton>
            </>
            :
            <Box sx={{display:'flex',gap:'9px'}}>
            <IconButton
              size="large"
              edge="end"
              
              onClick={toggleColorMode}
              >
              {theme.palette.mode=='dark' ?  <LightModeIcon/> : <NightlightIcon/>}
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              onClick={handleLogin}
              >
              <LoginIcon ></LoginIcon>
            </IconButton>
            </Box>
            
            }
            
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        </Container>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}