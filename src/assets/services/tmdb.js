import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const tmdbApiKey =import.meta.env.VITE_TMDB_MOVIE_API_KEY

export const  tmdbApi = createApi({
    reducerPath:'tmdbApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3'}),
    endpoints:(builder)=>({
        //get movies by [type]
        getMovies: builder.query({
            query: (genreName) => {
            //get movies by genre
            if(genreName){
            return `/discover/movie?with_genres=${genreName}&api_key=${tmdbApiKey}` 
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