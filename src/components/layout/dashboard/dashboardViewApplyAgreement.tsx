"use client"

import React, { useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

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
import DashboardCard from './dashboardInsurance'
import { useParams, useRouter } from "next/navigation";
import { Property, Landlord } from '@/components/layout/dashboard/PropertyListTypes'; // Ensure these are correctly imported
import { FileDown } from 'lucide-react';
import { DateTimePicker } from "@/components/ui/date-time-picker/date-time-picker";

import { useAtom } from "jotai";
import { selectedPropertyAtom } from "@/components/states/selectedPropertyAtom";
import Questionnaire from './dashboardQuestionnaireAgreementApplication';

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

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
import { redirect } from 'next/dist/server/api-utils'
import { Separator } from '@/components/ui/separator';

const DashboardView = () => {
    const router = useRouter();


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: 'John Doe',
            email: 'john@seneca.ca',
            phoneNumbers: '6476717000',
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const [, setSelectedPropertyId] = useAtom(selectedPropertyAtom);
    // useEffect(() => {
    //     setSelectedPropertyId(property.id);
    // }, [property.id, setSelectedPropertyId]);

    const requiredDocuments = {
        name: 'All the document need to upload', selectionType: 'multiple-choice',
        options: [
            { value: 'PhotoID', label: 'Passport' },
            { value: 'School Letter', label: 'School Letter' },
            { value: 'Bank Statement', label: 'Bank statement' },
            { value: 'Credit Score', label: 'Credit Score' },
        ]
    }

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
                                        <FormLabel>Landloard Name</FormLabel>
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



                        <div className="sm:col-span-2 flex flex-col justify-end mt-5 mr-10"
                        >

                            <div className='flex flex-row gap-2'>

                            </div>
                            <div className="sm:col-span-3">
                                <div>
                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            Country
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </form>

                <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-8 lg:space-y-0 mt-5">

                <div className="sm:col-span-2">
                        <label htmlFor="street-address" className="block text-sm font-medium  text-gray-900">
                            Street address
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="street-address"
                                id="street-address"
                                autoComplete="street-address"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                            City
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="address-level2"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                            State
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="region"
                                id="region"
                                autoComplete="address-level1"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                            Postal code
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="postal-code"
                                id="postal-code"
                                autoComplete="postal-code"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
            </Form>
            <Separator className="my-5 dark:bg-white bg-slate-500" />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-8 lg:space-y-0">
                        <div className="sm:col-span-2 sm:col-start-1">

                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tenant Name</FormLabel>
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
                                        {/* <FileDown className='mr-2'/>
                                        <a href='https://drive.google.com/uc?export=download&id=1ntON1n6zB7HwoYRNUNmLnaohsqYmrhtG' download>
                                            Rental Application
                                        </a> */}
                                        Add more tenants
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>

                </form>
            </Form>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-8 lg:space-y-0">
                        <div className="sm:col-span-2 sm:col-start-1">

                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Tenant Name" />
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
                                        <FormLabel></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Tenant Email" />
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
                                        <FormLabel></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Phone Number" />
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
                                    Monthly Rent for 2023-2024
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
                                    ${new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 2 }).format(500)}
                                </div>
                                <p className="text-xs text-muted-foreground text-green-600">
                                    + 20.1% saved from regular price in Toronto
                                </p>
                            </CardContent>
                        </Card>

                    </li>

                    <li className="col-span-1 rounded-lg ">
                        <div className="flex flex-col w-full items-center justify-around gap-2 h-full">
                            {/* <div>
                                <Button variant="dashboard"
                                >
                                    <Clock className='mr-2'></Clock>
                                    Tenancy Starts: 
                                </Button>
                            </div>
                            <div>
                                
                                <DatePicker />
                            </div> */}
                            <div className="sm:col-span-3 sm:col-start-1">
                                <div className="flex flex-row items-center">
                                    <label htmlFor="start-date" className="text-sm font-medium w-10 mx-2">
                                        From:
                                    </label>
                                    <DateTimePicker aria-label="Select a date"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <div className="flex flex-row items-center">

                                    <label htmlFor="end-date" className="text-sm font-medium  w-10 mx-2">
                                        To:
                                    </label>
                                    <DateTimePicker aria-label="Select a date"
                                    />

                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </li>


                    <li className="col-span-1 rounded-lg ">
                        <div className="flex flex-col w-full items-center justify-around gap-2 h-full">
                            <div>
                                {/* <Button variant="dashboard">
                                    <Clock className='mr-2'></Clock>
                                    Tenancy Ends: 
                                </Button> */}
                            </div>
                            <div>
                                {/* <Button variant="dashboard"
                                    className='bg-orange-400 text-white hover:bg-orange-500 dark:hover:bg-orange-500 dark:bg-orange-400'
                                    //onClick={() => router.push(`/rental-property/${property.id}/rent-ledger`)}
                                >
                                    Go to Rent Ledger
                                </Button> */}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <Separator className="my-5 dark:bg-white bg-slate-500" />
            <div className='pb-5'>
                <Questionnaire />
            </div>
            <Separator className="my-5 dark:bg-white bg-slate-500" />

            <div className="col-span-full">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 ">
                    Files need to upload
                </label>
                <div className='mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {/* <DashboardCard />
                <DashboardCard /> */}
                <div>
                    {requiredDocuments.options.map(option => (
                        // <label key={option.value} className="inline-flex items-center">
                        //   <input type="checkbox" name={option.name} value={option.value} />
                        //   <span className="ml-2">{option.label}</span>
                        // </label>
                        <div className="inline-flex items-center space-x-2 mr-2" key={option.value}>
                            <Checkbox />
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed  px-6 py-10">
                    <div className="text-center">
                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md  font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                                <span>Upload files here</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, PDF up to 10MB</p>
                    </div>
                </div>
            </div>

            

        </div>



    )
}

export default DashboardView