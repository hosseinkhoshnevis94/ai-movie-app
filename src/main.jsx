import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
import { Provider } from 'react-redux'
import store from './store.js'


const theme = createTheme({
  palette:{
    background:{
      categoryButtonColor: "red",
      categoryButtonGradiant: "red",
      categoryButtonHover: "red",

    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
  <ThemeProvider theme={theme}>
   <App />
  </ThemeProvider>,
  </Provider>
)
