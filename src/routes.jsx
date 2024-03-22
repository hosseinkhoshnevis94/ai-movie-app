import AppLayout from './assets/ui/AppLayout';
import { Actor, Home, Profile ,Movie} from './assets/pages';

const routes = [
    {
     element: <AppLayout/>,
     children:[
       {
         path:'/',
        element: <Home/>
       },
       {
         path:'/movie/:id',
        element: <Movie/>
       },
       {
         path:'/actor/:id',
        element: <Actor/>
       },
       {
         path:'/profile/:id',
        element: <Profile/>
       },
       
     ]
  
    },
  ]


  export default routes