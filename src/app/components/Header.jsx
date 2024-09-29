import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryTabs from './CategoryTabs';


const Header = () => {
  return (
    <div>
        <div className='flex flex-row bg-slate-300 justify-between p-5'>
            <div>Logo</div>
            <div>
                <ShoppingCartIcon />
            </div>
        </div>
        <div>
            <CategoryTabs />
        </div>
    </div>
  )
}

export default Header