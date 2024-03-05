import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";

import userReducer from "./userStore"

import gptReducer from "./GptSlice"

import configReducer from "./configSlice"


const appStore=configureStore(
    {
        reducer: {
            user:userReducer,
            movies:moviesSlice,
            gpt:gptReducer,
            config:configReducer

        }
    }
)

export default appStore