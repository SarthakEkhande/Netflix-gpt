// gptSlice.js
import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: 'GPT',
  initialState: {
    showgptsearch: false,
    movieResults: null,
    movieName:null
    
  },
  reducers: {
    togglegptsearchView: (state) => {
      state.showgptsearch = !state.showgptsearch;
    },
    addGptMovieResult: (state, action) => {
        const {movieName,movieResults}=action.payload
      state.movieResults = movieResults;
      state.movieName=movieName
    },
  },
});

export const { togglegptsearchView, addGptMovieResult } = GptSlice.actions;
export default GptSlice.reducer;
