import React, { useState } from 'react';
import { Button } from '@/shadcn-components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shadcn-components/ui/dropdown-menu";

const PriceFilter = ({ getFilterValue }) => {
    const [filter, setFilter] = useState("price low to high");

    const handleFilterChange = (value) => {
        setFilter(value);
        getFilterValue(value);
    };


    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Filter</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>By Price</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={filter} onValueChange={handleFilterChange}>
                        <DropdownMenuRadioItem value="price low to high">Low to High</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="price high to low">High to Low</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default PriceFilter;
