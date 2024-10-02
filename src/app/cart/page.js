"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeItem } from '../store/cartSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
  const allCartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // const aggregatedItems = allCartItems.reduce((acc, item) => {   //Aggregate the items
  //   const existingItem = acc.find(i => i.id === item.id);
  //   if (existingItem) {
  //     existingItem.count += 1;
  //   } else {
  //     acc.push({ ...item, count: 1 });
  //   }
  //   return acc;
  // }, []);

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleAddItem = (item) => {
    dispatch(addToCart(item));
  }

  console.log("Cart Items: ", allCartItems);

  return (
    <div>
      <h3 className='font-bold text-xl text-center m-5'>My Cart</h3>
      <div className='container w-3/5 mx-auto min-h-screen'>
      <div className='left-40'>
        <p>Item Count</p>
      </div>
        {allCartItems.length > 0 ? allCartItems.map((item) => (
          <div key={item.id} className=" flex justify-between p-2 border rounded-md m-3">
            <div className='flex flex-col'>
              <h5>{item.title}</h5>
              <p>${item.price}</p>
            </div>
            <div className='flex flex-row'>
                <div><button onClick={() => handleRemoveItem(item)}>
                  <RemoveIcon />
                </button></div>
                <p>{item.count}</p>
                <div ><button onClick={() => handleAddItem(item)}>
                  <AddIcon />
                </button></div>
    
            </div>
          </div>
        ))
      : <p>Cart is Empty</p>}
      </div>
    </div>
  );
}

export default Cart;