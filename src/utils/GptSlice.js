import { createSlice } from "@reduxjs/toolkit";


const GptSlice=createSlice({
    name:'GPT',
    initialState:{
        showgptsearch:false
    },
    reducers:{
        togglegptsearchView:(state)=>{
            state.showgptsearch=!state.showgptsearch;
        }
    }
})

export const {togglegptsearchView}=GptSlice.actions
export default GptSlice.reducer