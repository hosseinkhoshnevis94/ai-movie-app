import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { AppBar } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    flexGrow:"0.4",
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

  export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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