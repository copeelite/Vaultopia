import React from 'react'
import DashboardView from '@/components/layout/dashboard/dashboardView';
import { MoreVertical } from 'lucide-react';

import { Fragment } from 'react'
import { ChatBubbleLeftEllipsisIcon, TagIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { cn as classNames } from '@/lib/utils'
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button'
import { comment } from 'postcss';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
const activity = [
    {
        id: 1,
        type: 'finished',
        //person: { name: 'Eduardo Benz', href: '#' },
        // imageUrl:
        //     'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        url: 'https://drive.google.com/uc?export=download&id=1o4xh2_ApSeEyoNmjuuV-il_znIESXqWO',
        comment:
            'HELLO Home served the tenant with a legal letter and N4',
        date: 'January 4th, 2024',
    },
    {
        id: 2,
        type: 'finished',
        url: 'https://drive.google.com/uc?export=download&id=1RM66Izrn6Pru8x4TD6NPEv3XQSATZ313',
        //person: { name: 'Eduardo Benz', href: '#' },
        // imageUrl:
        //     'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        comment:
            'Filled LTB Application: LTB file No. LTB-L-123456-21',
        date: 'July 21st, 2024',
    },
    {
        id: 3,
        type: 'tags',
        person: { name: 'Hilary Mahy', href: '#' },
        tags: [
            { name: 'Bug', href: '#', color: 'fill-red-500' },
            { name: 'Accessibility', href: '#', color: 'fill-indigo-500' },
        ],
        date: '6h ago',
    },
    {
        id: 4,
        type: 'pending',
        // person: { name: 'Hilary Mahy', href: '#' },
        // tags: [
        //     { name: 'Bug', href: '#', color: 'fill-red-500' },
        //     { name: 'Accessibility', href: '#', color: 'fill-indigo-500' },
        // ],
        comment: 'Notice of Hearing',
        date: 'Pending',
    },
    {
        id: 5,
        type: 'pending',
        // person: { name: 'Jason Meyers', href: '#' },
        // imageUrl:
        //     'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        comment:
            'LTB Hearing',
        date: 'Pending',
    },
    {
        id: 6,
        type: 'pending',
        comment:
            'LTB Order',
        date: 'Pending',
    },
    {
        id: 7,
        type: 'pending',
        comment: 'Garnishment',
        date: 'Pending',
    },
]


const LitigationPanel = () => {
    return (
        <div className='border-dashed border border-black dark:border-white w-full h-[80vh] mt-5 rounded-lg overflow-x-scroll p-4'>
            <div>
                <div className='flex justify-between flex-row items-center'>
                    <div>
                        <h1 className='text-xl text-white bg-indigo-400 p-2 rounded-2xl'>Legal issues: Non payment of rent since January 2024</h1>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-around'>
                        <MoreVertical />
                    </div>
                </div>

                <div className='mt-5'>

                    <div className="flow-root">
                        <ul role="list" className="-mb-8">
                            {activity.map((activityItem, activityItemIdx) => (
                                <li key={activityItem.id}>
                                    <div className="relative pb-8">
                                        {activityItemIdx !== activity.length - 1 ?
                                            (
                                                <span className="absolute left-5 top-5 -ml-px h-full w-0.5 border-gray-300 border-dashed border" aria-hidden="true" />
                                            ) : null}
                                        <div className="relative flex items-start space-x-5">
                                            {activityItem.type === 'finished' ? (
                                                <>
                                                    <div className="relative">
                                                        <div
                                                            className="flex h-10 w-10 items-center justify-center bg-green-400 rounded-lg"
                                                        >
                                                            <Zap fill='white' className="h-5 w-5 text-white" aria-hidden="true" />
                                                        </div>
                                                        {/* <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                                                            <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        </span> */}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <div>
                                                            <div className="text-sm">
                                                                {/* <a href={activityItem.person.href} className="font-medium ">
                                                                    {activityItem.person.name}
                                                                </a> */}
                                                                {activityItem.date}
                                                            </div>
                                                            {/* <p className="mt-0.5 text-sm ">Commented {activityItem.date}</p> */}
                                                            <p>{activityItem.comment}</p>
                                                        </div>
                                                        <div className="mt-2 text-sm ">
                                                            <Button>
                                                                <a href={activityItem.url} download>
                                                                    Download the document
                                                                </a>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : activityItem.type === 'pending' ? (
                                                <>
                                                    {/* <div>
                                                        <div className="relative px-1">
                                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                                                <UserCircleIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    {/* <div className="min-w-0 flex-1 py-1.5">
                                                        <div className="text-sm ">
                                                            <a href={activityItem.person.href} className="font-medium ">
                                                                {activityItem.person.name}
                                                            </a>{' '}
                                                            assigned{' '}
                                                            <a href={activityItem.assigned.href} className="font-medium ">
                                                                {activityItem.assigned.name}
                                                            </a>{' '}
                                                            <span className="whitespace-nowrap">{activityItem.date}</span>
                                                        </div>
                                                    </div> */}

                                                    <div className="relative">
                                                        <div
                                                            className="flex h-10 w-10 items-center justify-center bg-pink-400 rounded-lg"
                                                        >
                                                            <Zap fill='white' className="h-5 w-5 text-white" aria-hidden="true" />
                                                        </div>
                                                        {/* <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                                                            <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        </span> */}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <div>
                                                            <div className="text-sm">
                                                                {/* <a href={activityItem.person.href} className="font-medium ">
                                                                    {activityItem.person.name}
                                                                </a> */}
                                                                {activityItem.date}
                                                            </div>
                                                            {/* <p className="mt-0.5 text-sm ">Commented {activityItem.date}</p> */}
                                                            <p>{activityItem.comment}</p>
                                                        </div>

                                                    </div>
                                                </>

                                            ) :
                                                activityItem.type === 'tags' ? (
                                                    <>
                                                        <div>
                                                            <div className="relative px-1">
                                                                <div className="flex items-center justify-center rounded-xl ring">
                                                                    <Badge>Next Step</Badge>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="min-w-0 flex-1 py-0 flex items-center">
                                                            <Separator className="my-2 dark:bg-secondary bg-white border-dashed border " />
                                                        </div>
                                                    </>
                                                ) : null}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LitigationPanel