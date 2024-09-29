"use client"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    categoryProducts: [],
    loading: false,
    error: null,
}

export const fetchCategoryProducts = createAsyncThunk(  
    'categories/fetchCategoryProducts',   
    async (categoryName) => {  
        const response = await fetch(`https://dummyjson.com/products/category/${categoryName}?limit=10&select=title,price,product,thumbnail`);  
        const data = await response.json();  
        console.log("Category data: ", data);  
        return data.products.map(product => (
            {  
                id: product.id,
                title: product.title,
                price: product.price,
                category: product.category,
                thumbnail: product.thumbnail,
            }  
        ));  
    }  
);  

const categoryProductSlice = createSlice({
    name: 'categoryProducts',
    initialState,
    reducers: {
 
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryProducts.pending, (state) => {
            state.loading = true;
            state.error = null
        }).addCase(fetchCategoryProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.categoryProducts = action.payload
        }).addCase(fetchCategoryProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
    }
})
// export const {  } = taskSlice.actions
export default categoryProductSlice.reducer
