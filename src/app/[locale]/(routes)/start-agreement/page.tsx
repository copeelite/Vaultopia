"use client"
import React, {useState} from 'react'

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DashboardView from '@/components/layout/dashboard/dashboardViewApplyAgreement';

const Page = () => {
    const [position, setPosition] = useState("Role")
    const [position1, setPosition1] = useState("Unit")

    return (
        <div>
            <div className='flex flex-row items-center gap-x-2  justify-between'>
                {/* <h1 className='text-xl'>Rental Unit Address: Unit 1806 - 18 Peter Street, Toronto, ON M5M 1J2</h1> */}
                <div className='flex flex-row gap-x-2'>
                    <div className='text-2xl'>Make a selection</div>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">{position}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Select your Role</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                    <DropdownMenuRadioItem value="landloard">Landloard</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="tenant">Tenant</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>
                <div className='flex flex-row gap-x-2'>
                {/* <div className='text-2xl'>Make a Unit selection</div>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">{position1}</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Select your unit</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={position1} onValueChange={setPosition1}>
                                <DropdownMenuRadioItem value="unit1">unit1</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="unit2">unit2</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div> */}
            </div>
                <div>
                    <Button variant="default">Submit your application</Button>
                </div>
            </div>

            <div className='border-dashed border border-black dark:border-white w-full h-[85vh] mt-5 rounded-lg overflow-x-scroll min-w-max p-4'>
            <DashboardView/>
            </div>
        </div>
    )
}

export default Page