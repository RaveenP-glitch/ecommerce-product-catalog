"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../store/categorySlice';

const CategoryTabs = () => {

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
        return <p>Categories loading...</p>
    }
    if (error) {
        return <p>There is an error {error}</p>
    }
    return (
        <div className='w-full'>
            <div class="flex flex-wrap gap-2 bg-slate-200 p-3 justify-evenly">
                {allCategories.slice(0,10).map((category) =>
                    <div key={category.slug} className=''>
                        <Link href={`/category/${category.slug}`}><button className='bg-slate-400 text-gray-900 rounded-md py-2 px-4 hover:bg-slate-600 hover:text-white'>{category.name}</button></Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CategoryTabs