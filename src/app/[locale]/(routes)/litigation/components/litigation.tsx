"use client"
import React from 'react'
import { useAtom } from "jotai";
import { selectedPropertyAtom } from "@/components/states/selectedPropertyAtom";

import { propertyList } from '@/components/layout/dashboard/PropertyList';

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { ChevronDown } from 'lucide-react';
import { PieChart } from 'lucide-react';
import LitigationPanel from './litigationPanel';
type Checked = DropdownMenuCheckboxItemProps["checked"]

const Litigation = () => {
    const [selectedProperty] = useAtom(selectedPropertyAtom);
    const property = propertyList.properties[selectedProperty as any - 1];

    const [position, setPosition] = React.useState("bottom")

    return (
        <div>
            <div className='flex justify-between flex-col lg:flex-row items-center'>
                <div>
                    <h1 className='text-xl'>Litigation - Non Payment of Rent</h1>
                    {property && <p>{property?.address}, {property?.city}, {property?.province}, {property?.postalCode}</p>}
                </div>
                <div className='flex flex-col md:flex-row items-center justify-around px-10 gap-x-4 gap-y-2'>
                    <h2>Activites: </h2>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className='dark:bg-indigo-400 hover:dark:bg-indigo-600'>Show All<ChevronDown className='ml-2' /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                {/* <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                                <DropdownMenuSeparator /> */}
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                    <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div>
                        <Button className='bg-indigo-400 dark:bg-indigo-400 dark:text-white hover:bg-indigo-600 dark:hover:bg-indigo-600'><PieChart className='mx-2' />Download Report</Button>
                    </div>
                </div>
            </div>
            <div>
            <LitigationPanel />
            </div>
        </div>
    )
}

export default Litigation