"use client"
import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState:[],
    reducers:{
        //add to wishlist
        addtowishlist: (state,action)=>{
             state.push(action.payload);
        },
        //remove from wishlist
        removefromwishlist: (state,action) =>{
            return state.filter((item=> item.id !== action.payload));
        }
    }
})

export const { addtowishlist, removefromwishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;