import {configureStore} from '@reduxjs/toolkit'
import cartReducer from "./cartSlice"
import wishlistReducer from './wishlistSlice'
import authReducer from './authSlice'
import { productApi } from "./productApi";
import { setupListeners } from "@reduxjs/toolkit/query";



const store = configureStore({
    reducer:{
        [productApi.reducerPath]: productApi.reducer,
       cart:cartReducer,
       wishlist:wishlistReducer,
       auth:authReducer,
    },    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})
setupListeners(store.dispatch);
export default store