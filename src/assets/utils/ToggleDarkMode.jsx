import { createTheme } from '@mui/material';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { createContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';

const ColorModeContext = createContext();

const ToggleDarkModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const mode = localStorage.getItem('mode');
    return mode ?? 'light';
  });

  const toggleColorMode = () => {
      setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    };
    useEffect(()=>{
    localStorage.setItem('mode', mode);
  },[mode])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorModeContext = () => {
  return useContext(ColorModeContext);
};

export default ToggleDarkModeProvider;
