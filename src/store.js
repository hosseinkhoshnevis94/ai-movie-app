import { configureStore } from "@reduxjs/toolkit";
import {tmdbApi} from './assets/services/tmdb'
import genreReducer from './features/genreSlice'

export default configureStore({
    reducer:{
        [tmdbApi.reducerPath]:tmdbApi.reducer,
        genre: genreReducer

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
})