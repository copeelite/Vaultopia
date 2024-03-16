


import React from 'react'
import { Plus, Clock } from 'lucide-react'

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

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

import { Progress } from "@/components/ui/progress"

import { ScrollArea } from "@/components/ui/scroll-area"

const DashboardPayment = () => {

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
        <Card className="w-[350px] overflow-scroll">
            <div className="flex flex-wrap items-center justify-between sm:flex-nowrap p-4">

                <Label>Payment history</Label>
                <CardDescription>
                    <Button className="bg-indigo-400"> Make a New Payment</Button>
                </CardDescription>
            </div>
            <ScrollArea className='h-[200px]'>
                <div className='items-center flex justify-center m-4 p-4 rounded-xl
            border-dashed border border-black dark:border-white'>
                    <div className="lg:col-start-3 lg:row-end-1">
                        <h2 className="sr-only">Summary</h2>
                        <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
                            <dl className="flex flex-wrap">
                                <div className="flex-auto pl-6 pt-6">
                                    <dt className="text-sm font-semibold leading-6 text-gray-900">Amount</dt>
                                    <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">$60.00</dd>
                                </div>
                                <div className="flex-none self-end px-6 pt-4">
                                    <dt className="sr-only">Status</dt>
                                    <dd className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                        Paid
                                    </dd>
                                </div>
                                <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                                    <dt className="flex-none">
                                        <span className="sr-only">Client</span>
                                        <UserCircleIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd className="text-sm font-medium leading-6 text-gray-900">Alex Johnson</dd>
                                </div>
                                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                                    <dt className="flex-none">
                                        <span className="sr-only">Due date</span>
                                        <CalendarDaysIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd className="text-sm leading-6 text-gray-500">
                                        <time dateTime="2023-01-31">January 31, 2023</time>
                                    </dd>
                                </div>
                                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                                    <dt className="flex-none">
                                        <span className="sr-only">Status</span>
                                        <CreditCardIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd className="text-sm leading-6 text-gray-500">Paid with MasterCard</dd>
                                </div>
                            </dl>
                            <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                    Download receipt <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollArea>


        </Card>

    )
}

export default DashboardPayment