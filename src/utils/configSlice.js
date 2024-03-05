import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice=createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
        changelanguage:(state,action)=>{
           state.lang= action.payload

        }
    }
})
export const {changelanguage} =ConfigSlice.actions
export default ConfigSlice.reducer