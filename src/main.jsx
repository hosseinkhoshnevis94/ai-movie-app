import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import ToggleDarkModeProvider from './assets/utils/ToggleDarkMode.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(

  <ToggleDarkModeProvider>
  <Provider store={store}>
   <App />
  </Provider>
  </ToggleDarkModeProvider>
)
