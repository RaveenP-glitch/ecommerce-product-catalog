"use client"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    loading: false,
    error: null,
}

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json()
    console.log(data)
    return data.map(category => (
        {
            slug: category.slug,
            name: category.name,
            url: category.url,
        }
    ))
});

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
 
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.loading = true;
            state.error = null
        }).addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload
        }).addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
    }
})
// export const {  } = taskSlice.actions
export default categorySlice.reducer