import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{},
    isAuthenticated:false,
    sessionId:''

}


export const  authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action) =>{
            //payload is userData
           state.user = action.payload,
           state.isAuthenticated=true,
           state.sessionId = localStorage.getItem('session_id')
           localStorage.setItem("accountId",action.payload.id)

        }
    }
})


export const {setUser} = authSlice.actions
export default authSlice.reducer