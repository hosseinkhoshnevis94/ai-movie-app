import { configureStore } from "@reduxjs/toolkit";
import {tmdbApi} from './assets/services/tmdb'
import searchGenreCategorySliceReducer from './assets/redux/searchGenreCategorySlice'
import userReducer from './assets/redux/auth'

export default configureStore({
    reducer:{
        [tmdbApi.reducerPath]:tmdbApi.reducer,
        user:userReducer,
        searchGenreCategorySlice:searchGenreCategorySliceReducer

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
})