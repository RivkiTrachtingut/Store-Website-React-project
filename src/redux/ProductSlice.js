
import { createSlice } from "@reduxjs/toolkit";
import { fetchDataAsyncAction } from "./thank";
import { addToCart } from './CartSlice'; // ייבוא פעולה לעגלה

const ProductSlice = createSlice({
    name: 'products',
    initialState: {
        productList: [],
        loading: false,
        error: false
    },
    reducers: {
        
    },
    extraReducers: builder => {
        builder
            .addCase(fetchDataAsyncAction.pending, (state) => {
                state.loading = true;
                state.error = false;
                state.productList = [];
            })
            .addCase(fetchDataAsyncAction.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.productList = action.payload;
            })
            .addCase(fetchDataAsyncAction.rejected, (state) => {
                state.loading = false;
                state.error = true;
                state.productList = [];
            })
    }
});

export default ProductSlice.reducer;
