import React from 'react'
import { Plus, Clock } from 'lucide-react'
import { PaperClipIcon } from '@heroicons/react/20/solid'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarDaysIcon, CreditCardIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { BellRing, Check } from "lucide-react"
import { cn as classNames } from "@/lib/utils"
import { Dot } from 'lucide-react';
import { Siren } from 'lucide-react';

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

import { Progress } from "@/components/ui/progress"
import Link from 'next/link'
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

interface Statuses {
    [key: string]: string;
}
const statuses: Statuses = {
    Paid: 'text-green-700 bg-green-50 ring-green-600/20',
    Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
    Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}
const clients = [
    {
        id: 1,
        name: 'School Letter',
        lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
        status: "verified",
        color: 'bg-green-50 ring-green-600/20 text-green-600'

    },
    {
        id: 2,
        name: 'Bank Statement',
        lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
        status: "faked",
        color: 'bg-red-50 ring-red-600/10 text-red-600'

    },
    {
        id: 3,
        name: 'Study Permit',
        lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
        status: "pending",
        color: 'bg-yellow-50 ring-yellow-600/20 text-yellow-600'

    },
]
const DashboardCard = () => {

    const notifications = [
        {
            title: "Your call has been confirmed.",
            description: "1 hour ago",
        },
        {
            title: "You have a new message!",
            description: "1 hour ago",

        },
        {
            title: "Your subscription is expiring soon!",
            description: "2 hours ago",
        },
    ]

    return (
        <Card className="w-[400px] pb-5">
            <div className="flex flex-wrap items-center justify-between sm:flex-nowrap p-4">

                <Label>Uploaded Files</Label>
                <CardDescription>
                    <Button className="bg-indigo-400"> <Plus className='text-white'
                    /></Button>
                </CardDescription>

            </div>


            <div >
                <ul role="list" className="grid grid-rows-1 gap-x-6 gap-y-4 lg:grid-cols-1 xl:gap-x-4">
                    {clients.map((client) => (
                        <div key={client.id}>
                            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                <li className="flex items-center py-4 pl-4 pr-5 text-sm leading-6 justify-around">
                                    <div className="flex w-0 flex-1 items-center ">
                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium">{client.name}</span>
                                            <span className="flex-shrink-0 text-gray-400">746kb</span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a
                                            href='https://drive.google.com/uc?export=download&id=1rtZO506YbvAgFbA1KT3MJU9ujsxiSGTi' download
                                            className="font-medium text-indigo-400 hover:text-indigo-500">
                                            Download
                                        </a>
                                        
                                    </div>
                                    <div
                                            className={classNames(
                                                statuses[client.lastInvoice.status],
                                                client.color,
                                                'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset mx-4'
                                            )}
                                        >
                                            {client.status}
                                        </div>
                                </li>

                            </ul>
                            <li key={client.id} className="overflow-hidden rounded-xl border border-gray-200">
                                {/* <div className="flex items-center gap-x-4 border-b border-gray-900/5 p-2">
                                
                                <span className="flex h-3 w-3 rounded-full bg-pink-500" />

                                <div className="text-sm font-medium leading-6 ">{client.name}</div>
                                <Menu as="div" className="relative ml-auto">
                                    <Menu.Button className="-m-2.5 block p-2.5">
                                        <span className="sr-only">Open options</span>
                                        <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-50' : '',
                                                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                                                        )}
                                                    >
                                                        View<span className="sr-only">, {client.name}</span>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-50' : '',
                                                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                                                        )}
                                                    >
                                                        Edit<span className="sr-only">, {client.name}</span>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div> */}

                                {/* <dl className="-my-3  px-2 py-4 text-sm leading-6">
                                <div className="flex py-2">
                                    <dt><Link href={'/litigation'}
                                    className='text-indigo-500 text-xl hover:underline text-center'
                                    >
                                    Click here to view details
                                    </Link></dt>
                                    
                                </div>
                                <div>
                                    <Progress value={30} className="w-[100%]" />

                                </div>


                                <div className="flex justify-between gap-x-4 py-3">

                                    <dt className="text-gray-500">
                                        <div className="flex -space-x-4 rtl:space-x-reverse">
                                            
                                            <span className='inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100'>
                                                <svg
                                                    className='h-full w-full text-stone-300'
                                                    fill='currentColor'
                                                    viewBox='0 0 24 24'
                                                >
                                                    <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                                                </svg>
                                            </span>
                                            <span className='inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100'>
                                                <svg
                                                    className='h-full w-full text-stone-300'
                                                    fill='currentColor'
                                                    viewBox='0 0 24 24'
                                                >
                                                    <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                                                </svg>
                                            </span>
                                            <span className='inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100'>
                                                <svg
                                                    className='h-full w-full text-stone-300'
                                                    fill='currentColor'
                                                    viewBox='0 0 24 24'
                                                >
                                                    <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                                                </svg>
                                            </span>
                                        </div>
                                    </dt>



                                    <dd className="flex items-start gap-x-2">
                                        <div className="font-medium ">
                                            <Clock />
                                        </div>
                                        <div
                                            className={classNames(
                                                statuses[client.lastInvoice.status],
                                                'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                                            )}
                                        >
                                            Due in 4 days
                                        </div>
                                    </dd>
                                </div>
                            </dl> */}
                            </li>
                        </div>

                    ))}
                </ul>
            </div>


        </Card>

    )
}

export default DashboardCard