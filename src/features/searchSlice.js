import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query:'',
    page:1
}


export const  searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        searchMovie:(state,action) =>{
            //payload is search query
            state.query=action.payload
            
        }
    }
})


export const {searchMovie} = searchSlice.actions
export default searchSlice.reducer