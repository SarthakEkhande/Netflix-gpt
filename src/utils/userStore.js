import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"User",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload;

        },
        removeuser:(state,action)=>{
            return null;

        }

    }
})

export const {addUser,removeuser}=userSlice.actions

export default userSlice.reducer;
