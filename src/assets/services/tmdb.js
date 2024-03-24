import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const tmdbApiKey =import.meta.env.VITE_TMDB_MOVIE_API_KEY

export const  tmdbApi = createApi({
    reducerPath:'tmdbApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3'}),
    endpoints:(builder)=>({
        //get moviesby [type]
        getMovies: builder.query({
            query: ({genre,category,searchQuery,page}) => {
            //get movies by genre
            if(genre.id && genre.id!==0 ){
            return `/discover/movie?with_genres=${genre.id}&page=${page}&api_key=${tmdbApiKey}` 
             } 
             //get now-playing movies 
            if(category=='now-playing'){
            return `/movie/now_playing?page=${page}&api_key=${tmdbApiKey}` 
             } 
             //get top-rated movies 
            if(category=='top-rated'){
            return `/movie/top_rated?page=${page}&api_key=${tmdbApiKey}` 
             } 
             //get upcoming movies 
            if(category=='upcoming'){
            return `/movie/upcoming?page=${page}&api_key=${tmdbApiKey}`
             } 
             //get movies by search 
            if(searchQuery){
            return  `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}` 
             } 
             //get popular movies 
            return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`;
             
        }
        }),
        //get genres
        getGenres : builder.query({
            query: () => {
             return `/genre/movie/list?api_key=${tmdbApiKey}`
        },
    }),
    //get movie
    getMovie : builder.query({
        query: (movieId) =>{
            return `/movie/${movieId}?append_to_response=videos,credits&api_key=${tmdbApiKey}`
        }
    }),
    // get user's specific lists
    getRecommendationMovies : builder.query({
     query:({movieId,list}) =>{
        return `/movie/${movieId}/${list}?api_key=${tmdbApiKey}`
     }
    }),
    // get actor details
    getActor : builder.query({
    query:(actorId) =>{
        return `/person/${actorId}?api_key=${tmdbApiKey}`
    }
    }),
    // get actor details
    getMoviesByActorId : builder.query({
    query:(actorId) =>{
        return `person/${actorId}/movie_credits?api_key=${tmdbApiKey}`
    }
    })
    })
})

export const {
    useGetMovieQuery,
    useGetMoviesQuery,
    useGetGenresQuery,
    useGetRecommendationMoviesQuery,
    useGetActorQuery,
    useGetMoviesByActorIdQuery

} = tmdbApi