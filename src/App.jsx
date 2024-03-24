import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from './routes';

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