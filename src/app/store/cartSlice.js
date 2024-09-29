"use client"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    items: [],

}

// export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
//     const response = await fetch('https://dummyjson.com/products/categories');
//     const data = await response.json()
//     console.log(data)
//     return data.map(cart => (
//         {
//             slug: cart.slug,
//             name: cart.name,
//             url: cart.url,
//         }
//     ))
// });

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => { 
            state.items.push(action.payload)
        },
    },
})
// export const {  } = taskSlice.actions
export default cartSlice.reducer