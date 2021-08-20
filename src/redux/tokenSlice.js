import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name:'token',
    initialState:{
        token:[]
    },
    reducers:{
        storeToken : (state,action)=> {
            state.token =action.payload;
        }
    }
});

export const {storeToken} = tokenSlice.actions;
export default tokenSlice.reducer;