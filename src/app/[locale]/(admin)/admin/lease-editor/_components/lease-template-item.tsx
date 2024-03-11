"use client"
import React from 'react'
import { LeaseTemplateList } from './types';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CellAction } from "@/app/[locale]/(admin)/admin/lease-editor/_components/cell-action"

import Link from 'next/link';
interface NavItemProps {
    isActive?: boolean;
    isExpanded: boolean;
    item: LeaseTemplateList;
    onExpand: (id: string) => void;
}

const NavItem = (
    {
        isActive,
        isExpanded,
        item,
        onExpand
    }: NavItemProps) => {
        const [isMounted, setIsMounted] = React.useState(false)
        React.useEffect(() => {
            setIsMounted(true)
        }, [])
        if (!isMounted) return null
    return (
        <AccordionItem
            value={item.name}
            className='border-none'
        >
            <AccordionTrigger
                onClick={() => onExpand(item.name)}
                className={cn("flex items-center gap-x-2 p-1.5 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
                    //isActive && !isExpanded && "bg-sky-500/10 text-sky-500",
                )}
            >
                <div className='w-full flex items-center gap-x-2 justify-between'>
                    {/* <div className='w-7 h-7 relative'>
                        {item.icon && (
                            <item.icon
                                className='w-7 h-7'
                            />
                        )}
                    </div> */}
                    <div>
                    <span>
                        {item.name}
                    </span>
                    </div>
                    <CellAction data={item} />
                </div>
            </AccordionTrigger>
            <AccordionContent
                className="pt-1 "
            >
                <ul>
                    {item.children && item.children.map((subItem) => (
                        <div key={subItem.name} >
                        <li >
                            <div className='block rounded-md py-2 px-2 text-sm w-full text-center'>
                                {subItem.name}
                            </div>
                        </li>
                        </div>
                    ))}
                </ul>
                <div className='p-[6px]'>+ Add item</div>
            </AccordionContent>
        </AccordionItem>
    )
}

export default NavItem