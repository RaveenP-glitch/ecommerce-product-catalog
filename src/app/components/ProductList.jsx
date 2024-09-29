"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/shadcn-components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shadcn-components/ui/tabs"
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../store/categorySlice';

const ProductList = ({ categoryName }) => {

    console.log("categoryName: ", categoryName);
    const allCategories = useSelector((state) => state.categories.categories)
    const loading = useSelector((state) => state.categories.loading)
    const error = useSelector((state) => state.categories.error)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    // let filteredTasks = filterValue !== 'All' ?
    //     tasks.filter((task) => task.status === filterValue) : tasks;

    if (loading) {
        return <p>Products loading...</p>
    }
    if (error) {
        return <p>There is an error {error}</p>
    }
    return (
        <div className='w-full'>
            <div class="flex flex-wrap gap-2 bg-slate-200 p-3">
           
            </div>
        </div>
    )
}

export default ProductList