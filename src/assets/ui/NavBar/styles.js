import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { AppBar } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
   dispaly:'flex',
   alignItems:'center',
   padding:'0px 10px',
    position: 'relative',
    flexGrow:"0.4",
    color:'black',
    display:"flex",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));


  export const LogoImage = styled('img')(({ theme }) => ({
    height: '50px',
  }));
  
  export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('md')]: {
        width: '100%',
      },
    },
  }));

  export const StyledAppBar = styled(AppBar)(({theme})=>({
    backgroundColor: theme.palette.background.red,
  
  }))