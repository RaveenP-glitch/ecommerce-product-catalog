"use client"
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import CategoryProductList from '@/app/components/CategoryProductList';
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import PriceFilter from '@/app/components/PriceFilter';


const CategoryPage = () => {
    const params = useParams(); // Get URL params  
    const categoryName = params['category-name'];

    console.log("params: ", params);

    const [filterVal, setFilterVal] = useState("");

    const getfiltervalue = (val) => {
        setFilterVal(val);
    }

    return (
        <div>
            <div className='flex flex-row justify-between m-2 p-3'>
                <span className='mx-5'>Home - Category</span>
                <PriceFilter getFilterValue={getfiltervalue} />
            </div>
            <CategoryProductList categoryName={categoryName} filterValue={filterVal}/>
        </div>
    );
};

export default CategoryPage;
