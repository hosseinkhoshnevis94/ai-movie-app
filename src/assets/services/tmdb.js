import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const tmdbApiKey =import.meta.env.VITE_TMDB_MOVIE_API_KEY

export const  tmdbApi = createApi({
    reducerPath:'tmdbApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3'}),
    endpoints:(builder)=>({
        //get movies by [type]
        getMovies: builder.query({
            query: ({genre,category,searchQuery}) => {
            //get movies by genre
            if(genre.id && genre.id!==0 ){
            return `/discover/movie?with_genres=${genre.id}&api_key=${tmdbApiKey}` 
             } 
             //get now-playing movies 
            if(category=='now-playing'){
            return `/movie/now_playing?api_key=${tmdbApiKey}` 
             } 
             //get top-rated movies 
            if(category=='top-rated'){
            return `/movie/top_rated?api_key=${tmdbApiKey}` 
             } 
             //get upcoming movies 
            if(category=='upcoming'){
            return `/movie/upcoming?api_key=${tmdbApiKey}`
             } 
             //get movies by search 
            if(searchQuery){
            return  `/search/movie?query=${searchQuery}&api_key=${tmdbApiKey}` 
             } 
             //get popular movies 

            return `/movie/popular?api_key=${tmdbApiKey}`;
             
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