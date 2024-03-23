import {useState} from 'react';
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
import { Search,StyledInputBase,SearchIconWrapper,StyledAppBar, LogoImage } from './styles';
import { useTheme } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { Container, Drawer, useMediaQuery } from '@mui/material';
import SideBar from '../SideBar/SideBar';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [searchQuery,setSearchQuery] = useState('')
  const [openNavBar,setOpenNavBar] = useState(true)
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:600px)')
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isAuthenticated = true
    

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const toggleDrawer = () =>{
    setOpenNavBar(prev=>!prev)
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
      sx={{top:"10px"}}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
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
    <Box>
      <AppBar position="static" sx={{backgroundColor:`${theme.mode=='dark' ? 'green' : 'gray'}`}}>
        <Container maxWidth='xl'>

      
        <Toolbar sx={{display:'flex',justifyContent:"space-between",alignItems:"center" , height:'80px'}}>
         {isMobile && <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, }}
          >
            <MenuIcon onClick={toggleDrawer} />
          </IconButton>}
          <Box sx={{ display:'flex',justifyContent:'center',alignItems:'end',gap:2 ,display: { xs: 'none', md: 'flex' }}} >
          <LogoImage src="/logo.png" alt="movie"   />
          <Typography variant='caption' fontFamily={'Chilanka'}>AI Powered !</Typography> 
            </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={searchQuery}
              onChange={(e)=>{setSearchQuery(e.target.value) ,console.log(searchQuery)} }
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           { isAuthenticated ? <>

            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            {theme.palette.mode=='dark' ?  <LightModeIcon/> : <NightlightIcon/>}
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
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
              color="inherit"
              >
              <AccountCircle />
            </IconButton>
            </>
            :
            <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              >
              {theme.palette.mode=='dark' ?  <LightModeIcon/> : <NightlightIcon/>}
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              >
              <LoginIcon></LoginIcon>
            </IconButton>
                </>
            
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