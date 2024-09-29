"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import ProductList from '@/app/components/ProductList';

const CategoryPage = () => {
    const params = useParams()

    console.log("params: ", params)
    return (
        <div>
            <h2>Category Name</h2>
            <ProductList categoryName={params.category-name}/>
        </div>
    )
}

export default CategoryPage