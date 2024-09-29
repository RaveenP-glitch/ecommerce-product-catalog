"use client"
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';  
import CategoryProductList from '@/app/components/CategoryProductList';

const CategoryPage = () => {  
    const params = useParams(); // Get URL params  
    const categoryName = params['category-name'];

    console.log("params: ", params); 

    return (  
        <div>  
            <h2>Category Name: {categoryName}</h2> 
            <CategoryProductList categoryName={categoryName}/>
        </div>  
    );  
};  

export default CategoryPage;
