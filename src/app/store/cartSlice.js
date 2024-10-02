"use client"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Error from "next/error";

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
            const existingItem = state.items.find(item => item.id === action.payload.id);  
            if (existingItem) {  
                // If it exists, increment the count  
                existingItem.count += 1;  
            } else {  
                // If it does not exist, add it with a count of 1  
                state.items.push({ ...action.payload, count: 1 });  
            }  
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        removeItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);  
            if (existingItem) {  
                // If it exists, increment the count  
                if(existingItem.count>1){
                    existingItem.count -= 1;  
                }else{
                    state.items = state.items.filter(item => item.id !== action.payload.id)
                }
            } else {   
                throw Error("Item not found");
            }  
        }
    },
})
export const { addToCart, removeFromCart, removeItem } = cartSlice.actions
export default cartSlice.reducer