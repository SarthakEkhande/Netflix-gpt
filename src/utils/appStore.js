import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userStore"



const appStore=configureStore(
    {
        reducer: {
            user:userReducer

        }
    }
)

export default appStore