import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import store from './store.js'


const theme = createTheme({})

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
  <ThemeProvider theme={theme}>
   <App />
  </ThemeProvider>
  </Provider>
)
