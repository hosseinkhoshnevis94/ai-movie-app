import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const tmdbApiKey =import.meta.env.VITE_TMDB_MOVIE_API_KEY

export const  tmdbApi = createApi({
    reducerPath:'tmdbApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3'}),
    endpoints:(builder)=>({
        //get movies by [type]
        getMovies: builder.query({
            query: ({genreName,filter}) => {
            //get movies by genre
            if(genreName){
            return `/discover/movie?with_genres=${genreName}&api_key=${tmdbApiKey}` 
             } 
             //get now-playing movies 
            if(filter=='now-playing'){
            return `/movie/now_playing?api_key=${tmdbApiKey}` 
             } 
             //get top-rated movies 
            if(filter=='top-rated'){
            return `/movie/top_rated?api_key=${tmdbApiKey}` 
             } 
             //get upcoming movies 
            if(filter=='upcoming'){
            return `/movie/upcoming?api_key=${tmdbApiKey}` 
             } 
             //get popular movies 
            if(filter=='popular'){
               return `/movie/popular?api_key=${tmdbApiKey}`;
             } 
        }
        }),
        //get genres
        getGenres : builder.query({
            query: () => {
             return `/genre/movie/list?api_key=${tmdbApiKey}`
        }
        })
    })
})

export const {
    useGetMoviesQuery,
    useGetGenresQuery
} = tmdbApi