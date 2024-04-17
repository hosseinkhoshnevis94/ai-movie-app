import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from 'react';
import { useColorModeContext } from '../../utils/ToggleDarkMode';
import { fetchToken } from '../../utils/fetchToken';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectCategory ,selectGenre,searchMovie} from '../../redux/searchGenreCategorySlice';


const useAlan = () =>{
const {setMode } = useColorModeContext()
const navigate = useNavigate()
const dispatch = useDispatch()
    useEffect(() => {
        alanBtn({
            key: '86ca283eefe6391065374787d6f1c9512e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({command,mode,genres,genreOrCategory,searchQuery}) => {
              if (command === 'changeMode') {
                if(mode==='light'){
                setMode('light')
                }else{
                setMode('dark')
                }
              }else if(command==='login'){
                fetchToken()
              }else if(command==='logout'){
                localStorage.clear()
                navigate('/')
              }else if(command==='chooseGenre'){
               const foundGenre = genres.find(genre=>genre.name.toLowerCase() ===genreOrCategory.toLowerCase())
                   if(foundGenre){
                  dispatch(selectGenre(foundGenre)) 
                  navigate('/')
                   }else{
                  const category = genreOrCategory.startsWith('top') ? 'top_rated' : genreOrCategory
                  dispatch(selectCategory(category)) ; 
                 navigate('/')

               }
              }else if(command==='search'){
                dispatch(searchMovie(searchQuery)) 
                navigate('/')
              }else if(command==='home'){
                 navigate('/')
              }
            }
        });
      }, []);

}



export default useAlan