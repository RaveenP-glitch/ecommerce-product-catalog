"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeItem } from '../store/cartSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Image from 'next/image';
import EmptyCartImage from '../assets/images/empty_cart.png';

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
          <p className='text-right mr-3 mb-3'>Item Count</p>
        </div>
        {allCartItems.length > 0 ? allCartItems.map((item) => (
          <div>
            <div key={item.id} className=" grid grid-cols-4 gap-4 outline outline-1 outline-gray-300 rounded-md mb-4 p-2">
              <div>
                <Image src={item.thumbnail} width={100} height={100} alt={item.title} />
              </div>
              <div className='col-span-2 mt-3'>
                <h5 className='text-sky-800/80 font-bold text-md mb-1'>{item.title}</h5>
                <p>${item.price}</p>
              </div>
              <div className='flex flex-row align-middle justify-self-end mt-6'>
                <div className='m-2'>
                  <button className='rounded-xl border-solid' onClick={() => handleRemoveItem(item)}>
                    <RemoveIcon fontSize='small' />
                  </button>
                </div>
                <p className='m-2 font-bold text-xl'>{item.count}</p>
                <div className='m-2'>
                  <button className='rounded-xl' onClick={() => handleAddItem(item)}>
                    <AddIcon fontSize='small' />         
                  </button>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
        ))
          : <div className="text-center">
            <Image
              src={EmptyCartImage}
              width={200}
              height={200}
              alt={"Empty cart image"}
            />
          </div>
        }
      </div>
    </div>
  );
}

export default Cart;