"use client"
import React, {useEffect} from 'react'
import { User2 } from 'lucide-react'
import LeaseTemplateAccordion from './_components/LeaseTemplateAccordion'
import { Button } from '@/components/ui/button'
import { LeaseTemplateList as LeaseTemplateListType } from './_components/types'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useAtom } from 'jotai';
import { isAddNewTemplateOpenAtom } from '@/components/states/admin/isAddNewTemplateOpen';
import { ChevronDown } from 'lucide-react';
import { Copy, Edit, Trash } from "lucide-react";

import AddTemplate from './add-template'
import { leaseContractTemplateAtom } from './_components/atom.js'; 
const LeaseTemplateList = () => {
  const [isNewTemplateOpen, setNewTemplate] = useAtom(isAddNewTemplateOpenAtom);
  // const [leaseContractTemplates, setLeaseContractTemplates] = useAtom(leaseContractTemplateAtom);
  // useEffect(() => {
  //   setLeaseContractTemplates(leaseContractTemplate);

  // }, [leaseContractTemplate]);

  return (
    <div className='space-y-4'>
      <div className='flex  items-center font-semibold text-lg gap-x-4'>
        <div className='flex'>
          <User2 className='h-6 w-6 mr-2' />
          Your Maintenance Service
        </div>
        <div className='flex'>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"default"}>Add
                <ChevronDown className='h-4 w-4 ml-1' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
              <DropdownMenuItem
                onClick={() => setNewTemplate(true)}
              >
                New Maintenance
              </DropdownMenuItem>
              {/* <DropdownMenuItem
              //onClick={() => router.push(`/dashboard/${params.storeId}/billboards/${data.id}`)}
              >
                New 
              </DropdownMenuItem> */}

            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <AddTemplate />
      <div>
        {/* <LeaseTemplateAccordion /> */}
      </div>
    </div>
  )
}

export default LeaseTemplateList