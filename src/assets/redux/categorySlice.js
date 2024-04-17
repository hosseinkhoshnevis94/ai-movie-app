import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category:''
}


export const  categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        selectCategory:(state,action) =>{
            //payload is category name
            state.category=action.payload
        }
    }
})


export const {selectCategory} = categorySlice.actions
export default categorySlice.reducer