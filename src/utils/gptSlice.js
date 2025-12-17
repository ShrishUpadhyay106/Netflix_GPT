import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
       
    },
    reducers:{
        toggleSearchMovies:(state,action) =>{
            state.showGptSearch = !state.showGptSearch;
        }
    },

});

export const{toggleSearchMovies}=gptSlice.actions;
export default gptSlice.reducer;