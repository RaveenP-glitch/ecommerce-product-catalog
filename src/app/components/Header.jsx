"use client"
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import Image from 'next/image';
import MainLogo from '../assets/images/logo-main.png'
import { useSelector } from 'react-redux';


const Header = () => {

  const allCartItems = useSelector((state) => state.cart.items)

  return (
    <div>
        <div className='flex flex-row bg-slate-300 justify-between p-2'>
            <div><Link href="/"><Image src={MainLogo} width={150} height={100}></Image></Link></div>
            <div className='content-center mr-8 bg-slate-100 rounded-xl px-4 my-3 shadow-sm'>
                <Link href={"/cart"}>
                    <ShoppingCartIcon fontSize='medium'/>
                </Link>
                <div className='absolute z-10 bg-sky-100 rounded-2xl px-2 top-12 right-6 outline outline-gray-400 bg-opacity-60 font-semibold'>{allCartItems.length}</div>
            </div>
        </div>
    </div>
  )
}

export default Header