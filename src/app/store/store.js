import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice';
import productSlice from './productSlice';


const store =  configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
  },
})

export default store;