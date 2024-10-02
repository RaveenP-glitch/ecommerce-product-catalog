"use client"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
    error: null,
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://dummyjson.com/products?limit=20&skip=10&select=id,title,price,product,category,thumbnail');
    const data = await response.json()
    return data.products.map(product => (
        {
           id: product.id,
           title: product.title,
           price: product.price,
           category: product.category,
           thumbnail: product.thumbnail,
        }
    ))
});

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
 
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = [];
            state.loading = false;
            state.products = action.payload
        }).addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
    }
})
// export const {  } = taskSlice.actions
export default productSlice.reducer
