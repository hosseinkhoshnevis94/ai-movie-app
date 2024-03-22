import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genre:''
}


export const  genreSlice = createSlice({
    name:'genre',
    initialState,
    reducers:{
        selectGenre:(state,action) =>{
            //payload is genres name
            state.genre=action.payload
        }
    }
})


export const {selectGenre} = genreSlice.actions
export default genreSlice.reducer