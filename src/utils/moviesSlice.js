import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies: null,
        trailerVideos:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.NowPlayingMovies=action.payload;
        },
        addTrailerVideos:(state,action)=>{
            state.trailerVideos=action.payload;

        }
    },
});

export const  {addNowPlayingMovies, addTrailerVideos}=moviesSlice.actions;
export default moviesSlice.reducer;