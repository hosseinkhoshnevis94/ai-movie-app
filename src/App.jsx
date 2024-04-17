import React, { useRef } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from './routes';
import useAlan from './assets/ui/Alan/Alan';

const router = createBrowserRouter(routes)
const App = () => {

  return (
    <>
      <CssBaseline/>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App