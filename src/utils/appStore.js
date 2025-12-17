import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReduer from "./gptSlice";
import configReducer from "./configSlice"
const appStore = configureStore(
    {
        reducer:{
            user: userReducer,
            movies: moviesReducer,
            gpt:gptReduer,
            config:configReducer
        }
    }
)
export default appStore;
