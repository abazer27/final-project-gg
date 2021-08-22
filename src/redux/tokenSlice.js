import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name:'token',
    initialState:{
        token:[],
        isAuthenticated:false
    },
    reducers:{
        storeToken : (state,action)=> {
            state.isAuthenticated=true
            state.token =action.payload;
        }
    }
});

export const {storeToken,login} = tokenSlice.actions;
export default tokenSlice.reducer;