"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/shadcn-components/ui/button"
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryProducts } from '../store/categoryProductSlice';
import { addToCart, removeFromCart } from '../store/cartSlice';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shadcn-components/ui/card"
import { toast } from "sonner"

const CategoryProductList = ({ categoryName, filterValue }) => {

    const allProducts = useSelector((state) => state.categoryProducts.categoryProducts)
    const loading = useSelector((state) => state.categoryProducts.loading)
    const error = useSelector((state) => state.categoryProducts.error)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoryProducts(categoryName))
    }, [dispatch, categoryName])

    // let filteredTasks = filterValue !== 'All' ?
    //     tasks.filter((task) => task.status === filterValue) : tasks;

    if (loading) {
        return <p>Category products loading...</p>
    }
    if (error) {
        return <p>There is an error {error}</p>
    }

    const sortedProducts = [...allProducts].sort((a, b) => {
        if (filterValue === "price low to high") {
            return a.price - b.price;
        } else if (filterValue === "price high to low") {
            return b.price - a.price;
        } else {
            return 0;
        }
    });

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    }

    return (
        <div className='w-full container mx-auto min-h-screen'>
            <p className='text-center'>Category: {categoryName}</p>
            <div class="flex flex-wrap gap-2 p-3 m-auto">
                {sortedProducts.map((product) =>
                    <Card key={product.id} className="w-[275px] bg-slate-100 rounded-md shadow-sm justify-center gap-1 m-2">
                        <Link href={`/product/${product.id}`}>
                            <CardHeader>
                                <CardDescription className="text-center">
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex justify-center items-center">
                                <Image src={product.thumbnail} width={185} height={150} alt={product.title} />
                            </CardContent>
                            <CardTitle className="text-center mb-3 px-3">{product.title}</CardTitle>
                                <h3 className='text-center font-bold text-xl'>${product.price}</h3>
                        </Link>
                        <CardFooter className="flex justify-center">
                            <Button
                                className="px-4 py-1 mb-5 outline rounded-sm font-semibold outline-offset-2 outline-black hover:bg-gray-700 hover:text-white"
                                variant="primary"
                                onClick={() => {
                                    handleAddToCart(product);
                                    toast("Item has been added to the cart", {
                                        description: `Added: ${product.title}`, 
                                        action: {
                                            label: "Undo",
                                            onClick: () => handleRemoveFromCart(product.id),
                                        },
                                    });
                                }}
                            >
                                Add to Cart
                            </Button>
                        </CardFooter>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default CategoryProductList