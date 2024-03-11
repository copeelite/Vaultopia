"use client"
import React from 'react'
import Link from 'next/link'
import { useLocalStorage } from 'usehooks-ts'
import { SIDENAV_ITEMS as navigation } from './constants'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Accordion } from '@/components/ui/admin/accordion'
import { CellAction } from "@/app/[locale]/(admin)/admin/lease-editor/_components/cell-action"

import NavItem from './lease-template-item'

import { useAtom } from 'jotai';
import { leaseContractTemplateAtom } from './atom.js'; 


import { fetchLeaseContractTemplate } from '@/actions/admin/fetchLeaseContractTemplate'
import useSWR, { mutate } from 'swr';
interface SidebarProps {
    storageKey?: string;
}

const LeaseTemplateAccordion = (
    {storageKey, }: SidebarProps,
) => {
    //const { data: leaseContractTemplates, error } = useSWR('leaseContractTemplate', fetchLeaseContractTemplate)
    //const [leaseContractTemplates, setLeaseContractTemplates] = useAtom(leaseContractTemplateAtom);
    const leaseContractTemplates = [{
        //give me fake data
        name: 'Cleaning',
        description: '',
        id: '1',

    },
    {
        name: 'Repair',
        description: '',
        id: '2',
    }
]
    storageKey = "t-sidebar-state"
    const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(storageKey, {})
    const defaultAccordionValue: string[] = Object.keys(expanded)
        .reduce((acc: string[], key: string) => {
            if (expanded[key]) {
                acc.push(key)
            }
            return acc

        }, [])
    const onExpand = (id: string) => {
        setExpanded(
            (curr) => (
                {
                    ...curr,
                    [id]: !curr[id]
                }
            )
        )
    }
    return (
        <div>
            <Accordion
                type='multiple'
                defaultValue={defaultAccordionValue}
                className='space-y-2'
            >
                {leaseContractTemplates && leaseContractTemplates.map((item, index) => (
                    <div key={index}
                    >
                        <div className='flex'>
                            <div className='w-full'>
                                <NavItem
                                    isActive={true}
                                    isExpanded={expanded[item.name]}
                                    item={item}
                                    onExpand={onExpand}
                                />
                            </div>
                            

                        </div>
                        <Separator />
                    </div>
                ))}
            </Accordion>
        </div>
    )
}

export default LeaseTemplateAccordion