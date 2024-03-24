import AppLayout from './assets/ui/AppLayout';
import { ActorPage, HomePage, ProfilePage ,MoviePage} from './assets/pages';

const routes = [
    {
     element: <AppLayout/>,
     children:[
       {
         path:'/',
        element: <HomePage/>
       },
       {
         path:'/movie/:id',
        element: <MoviePage/>
       },
       {
         path:'/actor/:id',
        element: <ActorPage/>
       },
       {
         path:'/profile/:id',
        element: <ProfilePage/>
       }
       
     ]
    }
  ]


  export default routes