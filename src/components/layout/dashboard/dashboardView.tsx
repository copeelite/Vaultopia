"use client"

import React, { useEffect, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Save, Clock, MapPin } from 'lucide-react';
import { DatePicker } from './datePicker';
import Questionnaire from './dashboardQuestionnaire';
import DashboardCard from './dashboardCardForShowFiles'

import { useParams, useRouter } from "next/navigation";
import { Property, Landlord } from '@/components/layout/dashboard/PropertyListTypes'; // Ensure these are correctly imported
import { FileDown } from 'lucide-react';

import { useAtom } from "jotai";
import { selectedPropertyAtom } from "@/components/states/selectedPropertyAtom";

interface DashboardViewProps {
    property: Property;
    landlord: Landlord; // Now also expecting landlord details
}
const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    phoneNumbers: z.string().min(10),
})
import DashboardMaintainence from './dashboardMaintainence'
import DashboardPayment from './dashboardPayment'
import { redirect } from 'next/dist/server/api-utils'
import { Separator } from '@/components/ui/separator';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const DashboardView: React.FC<DashboardViewProps> = ({ property, landlord }) => {
    const router = useRouter();

    const [position, setPosition] = useState("Select Units")

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: landlord.name,
            email: landlord.email,
            phoneNumbers: landlord.phoneNumber,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const [, setSelectedPropertyId] = useAtom(selectedPropertyAtom);
    useEffect(() => {
        setSelectedPropertyId(property.id);
    }, [property.id, setSelectedPropertyId]);



    return (


        <div>
            
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-8 lg:space-y-0">
                        <div className="sm:col-span-2 sm:col-start-1">

                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Landlord Name" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                    This is your public display name.
                                </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Landlord Email" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                    This is your public display name.
                                </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <FormField
                                control={form.control}
                                name="phoneNumbers"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Phone Number" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                    This is your public display name.
                                </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="sm:col-span-2 flex flex-col justify-end mt-5 mr-10">

                            <div className='flex flex-row gap-2'>
                                {/* <div>
                                    <Button className='bg-indigo-400 text-white hover:bg-indigo-500' type="submit"><Save></Save></Button>
                                </div> */}
                                <div>
                                    <Button className='bg-indigo-400 text-white hover:bg-indigo-500 text-sm mr-4'>
                                        <FileDown className='mr-2' />
                                        <a href='https://drive.google.com/uc?export=download&id=1ntON1n6zB7HwoYRNUNmLnaohsqYmrhtG' download>
                                            Rental Application
                                        </a>
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>

                </form>
            </Form>




            <div className='mt-2 py-5'>
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    <li className="col-span-1 rounded-lg shadow">
                        <Card className='sm:col-span-3 sm:col-start-1'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Rent for 2023-2024
                                </CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    ${new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 2 }).format(property.totalRent)}
                                </div>
                                <p className="text-xs text-muted-foreground text-green-600">
                                    + 20.1% from last year
                                </p>
                            </CardContent>
                        </Card>

                    </li>

                    <li className="col-span-1 rounded-lg ">
                        <div className="flex flex-col w-full items-center justify-around gap-2 h-full">
                            <div>
                                <Button variant="dashboard"
                                >
                                    <Clock className='mr-2'></Clock>
                                    Tenancy Starts: {property.tenancyStart}
                                </Button>
                            </div>
                            <div>
                                {/* <Button variant="dashboard"
                                >
                                    <Clock className='mr-2'></Clock>
                                    Tenancy Starts: Jan 1, 2024
                                </Button> */}
                                <DatePicker />
                            </div>
                        </div>
                        <div>

                        </div>
                    </li>


                    <li className="col-span-1 rounded-lg ">
                        <div className="flex flex-col w-full items-center justify-around gap-2 h-full">
                            <div>
                                <Button variant="dashboard">
                                    <Clock className='mr-2'></Clock>
                                    Tenancy Ends: {property.tenancyEnd}
                                </Button>
                            </div>
                            <div>
                                <Button variant="dashboard"
                                    className='bg-orange-300 text-white hover:bg-orange-500 dark:hover:bg-orange-500 dark:bg-orange-400'
                                    onClick={() => router.push(`/rental-property/${property.id}/rent-ledger`)}
                                >
                                    Go to Rent Ledger
                                </Button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <Separator className="my-5 dark:bg-white bg-slate-500" />
            <div className='pb-5'>
                <Questionnaire
                    property={property} landlord={landlord}
                />
            </div>
            <Separator className="my-5 dark:bg-white bg-slate-500" />


            <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                <DashboardCard />
                <DashboardMaintainence />
                <DashboardPayment />

            </div>

        </div>



    )
}

export default DashboardView