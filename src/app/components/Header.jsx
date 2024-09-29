import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';


const Header = () => {
  return (
    <div>
        <div className='flex flex-row bg-slate-300 justify-between p-5'>
            <div><Link href="/">Logo</Link></div>
            <div>
                <ShoppingCartIcon />
            </div>
        </div>
    </div>
  )
}

export default Header