import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
    name: "sample",
    initialState: {
        newarr:[],
        isLoggedin : JSON.parse(localStorage.getItem("Login")) || false,

    },
    reducers:{
        login :(state, action)=>{
            console.log("action", action);
            state.isLoggedin= action.payload;

        },
        newarr:(state, action)=>{
            state.newarr = action.payload;

        }


    }
});

export const {login, newarr} = stateSlice.actions;
export default stateSlice.reducer;