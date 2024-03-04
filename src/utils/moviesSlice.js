import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies: null,
        popularmovies:null,
        trailerVideos:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.NowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularmovies=action.payload;
        },

        addTrailerVideos:(state,action)=>{
            state.trailerVideos=action.payload;

        }
    },
});

export const  {addNowPlayingMovies, addPopularMovies, addTrailerVideos}=moviesSlice.actions;
export default moviesSlice.reducer;