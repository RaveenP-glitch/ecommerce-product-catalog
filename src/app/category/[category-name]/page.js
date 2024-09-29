"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import ProductList from '@/app/components/ProductList';

const CategoryPage = () => {
    const params = useParams()
    const { categoryName } = params
    console.log("params: ", categoryName)
    return (
        <div>
            <h2>Category Name</h2>
        </div>
    )
}

export default CategoryPage