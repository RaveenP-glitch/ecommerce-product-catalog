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
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        }
    },
})
export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer