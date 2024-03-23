import { configureStore } from "@reduxjs/toolkit";
import {tmdbApi} from './assets/services/tmdb'
import genreReducer from './features/genreSlice'
import categoryReducer from './features/categorySlice'

export default configureStore({
    reducer:{
        [tmdbApi.reducerPath]:tmdbApi.reducer,
        genre: genreReducer,
        category: categoryReducer

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
})