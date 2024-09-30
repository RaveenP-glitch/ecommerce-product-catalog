import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';
import categoryProductSlice from './categoryProductSlice';

const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: productSlice,
        categoryProducts: categoryProductSlice,
        cart: cartSlice,
    },
});

export default store;