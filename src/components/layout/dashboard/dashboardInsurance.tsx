


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

const DashboardMaintainence = () => {

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

                <Label>Maintaineance</Label>
                <CardDescription>
                    <Button className="bg-indigo-400"> <Plus className='text-white'
                    /></Button>
                </CardDescription>
            </div>
            <ScrollArea className='h-[200px]'>
                <div className='items-center flex justify-center m-4 p-4 rounded-xl
            border-dashed border border-black dark:border-white'>
                    <h1>Move card here</h1>
                </div>
            </ScrollArea>

        </Card>

    )
}

export default DashboardMaintainence