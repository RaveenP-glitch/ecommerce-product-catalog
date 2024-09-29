"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/shadcn-components/ui/button"
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryProducts } from '../store/productSlice';
import { addToCart } from '../store/cartSlice';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shadcn-components/ui/card"

const ProductList = ({ categoryName }) => {

    const allProducts = useSelector((state) => state.products.products)
    const loading = useSelector((state) => state.products.loading)
    const error = useSelector((state) => state.products.error)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoryProducts(categoryName))
    }, [dispatch])

    // let filteredTasks = filterValue !== 'All' ?
    //     tasks.filter((task) => task.status === filterValue) : tasks;

    if (loading) {
        return <p>Category products loading...</p>
    }
    if (error) {
        return <p>There is an error {error}</p>
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    return (
        <div className='w-full'>
            <p className='text-center'>Category Products</p>
            <div class="flex flex-wrap gap-2 p-3 m-auto">
                {allProducts.map((product) =>
                    <Card className="w-[300px] bg-slate-100 rounded-md shadow-sm justify-center gap-1 m-1">
                        <CardHeader>
                            <CardDescription className="text-center">
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="justify-center">
                            <Image src={product.thumbnail} width={100} height={100}></Image>
                            
                        </CardContent>
                        <CardTitle className="text-center">{product.title}</CardTitle>
                        <CardContent>
                            <h3 className='text-center font-bold text-xl'>{product.price}</h3>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button variant="secondary" className='px-3 outline outline-offset-2 outline-blue-500 hover:bg-slate-300'
                            onClick={handleAddToCart(product)}>
                                Add to Cart</Button>
                        </CardFooter>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default ProductList