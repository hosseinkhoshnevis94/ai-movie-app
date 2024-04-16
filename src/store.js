import { configureStore } from "@reduxjs/toolkit";
import {tmdbApi} from './assets/services/tmdb'
import genreReducer from './assets/features/genreSlice'
import categoryReducer from './assets/features/categorySlice'
import searchReducer from './assets/features/searchSlice'
import userReducer from './assets/features/auth'

export default configureStore({
    reducer:{
        [tmdbApi.reducerPath]:tmdbApi.reducer,
        genre: genreReducer,
        category: categoryReducer,
        search:searchReducer,
        user:userReducer

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
})