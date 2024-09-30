"use client"
import React from 'react'
import { useSelector } from 'react-redux'


const Cart = () => {

  const allCartItems = useSelector((state) => state.cart.items)
  console.log("Cart Items: ", allCartItems);
  return (
    <div>
      <h3>Cart Items</h3>

    </div>
  )
}

export default Cart