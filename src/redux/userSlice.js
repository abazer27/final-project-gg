import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        user:[]
    },
    reducers: {
      storeUser: (state, action) => {
        state.user = action.payload;
      }
    }
  });
  
  export const {storeUser} = userSlice.actions;
  export default userSlice.reducer;