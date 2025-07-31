import { configureStore } from "@reduxjs/toolkit";
import productReducer from './ProductSlice';
import cartReducer from './CartSlice';


const Store=configureStore({
    reducer:{
        product:productReducer,
         cart:cartReducer
    }
})
export default Store;
