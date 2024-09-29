"use client"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
    error: null,
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://dummyjson.com/products?limit=20&select=title,price,product,thumbnail');
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

export const fetchCategoryProducts = createAsyncThunk(  
    'categories/fetchCategoryProducts',   
    async (categoryName) => {  
        const response = await fetch(`https://dummyjson.com/products/category/${categoryName}?limit=10&select=title,price,product,thumbnail`);  

        // Check for response status and process the JSON  
        if (!response.ok) {  
            throw new Error('Failed to fetch category products');  
        }  
        
        const data = await response.json();  
        console.log(data);  

        // Map the returned data to desired format  
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
        }).addCase(fetchCategoryProducts.pending, (state) => {
            state.loading = true;
            state.error = null
        }).addCase(fetchCategoryProducts.fulfilled, (state, action) => {
            state.products = [];
            state.loading = false;
            state.products = action.payload
        }).addCase(fetchCategoryProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
    }
})
// export const {  } = taskSlice.actions
export default productSlice.reducer
