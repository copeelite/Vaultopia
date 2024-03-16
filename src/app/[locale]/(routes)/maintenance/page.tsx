"use client"
import React, { useState, useCallback } from 'react'
import LeaseTemplateList from '@/app/[locale]/(admin)/admin/lease-editor/lease-template-list'
import LeaseTemplateForm from '@/app/[locale]/(admin)/admin/lease-editor/lease-template-form'
import { MaintenanceClient } from './components/clients'
import { fetchLeaseContractTemplate } from '@/actions/admin/fetchLeaseContractTemplate'
import { LeaseTemplateList as LeaseTemplateListType } from '@/app/[locale]/(admin)/admin/lease-editor/_components/types'
import { db } from '@/lib/db'

import { propertyList } from '@/components/layout/dashboard/PropertyList';
import { AspectRatio } from "@/components/ui/aspect-ratio"

const property = propertyList.properties
const landlord = propertyList.landlords
const maintenanceData = propertyList.maintenanceRequests;
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { VolumeIcon } from 'lucide-react'; // Import the specific icon you want to use

const page = async () => {
  //const leaseContractTemplates = await fetchLeaseContractTemplate()
    
  return (
    <div className="overflow-auto h-[90vh] w-full">
      
      <LeaseTemplateList />
     
      <MaintenanceClient data={maintenanceData} property={property} />
      <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 w-full'>
        <div className='col-2'>
          <Card className="w-[400px] pb-5">
            <div className="flex flex-col  items-center justify-between sm:flex-nowrap p-4">

              <Label className='text-xl'>Uploaded Move In Picture</Label>

              <AspectRatio ratio={16 / 17} > 
                             <Image src="/move_in.png" alt="Move In" fill />
              </AspectRatio>

            </div>




          </Card>
        </div>
        <div className='col-2'>
          <Card className="w-[400px] pb-5">
            <div className="flex flex-col items-center justify-between sm:flex-nowrap p-4">

              <Label className='text-xl'>Uploaded Move Out Picture</Label>

              <AspectRatio ratio={16 / 17} >
                <Image src="/move_out.png" alt="Move In" fill />
              </AspectRatio>
            </div>





          </Card>
        </div>

        
      </div>
      
      <div className='grid grid-cols-3 w-full mt-5 p-5'>

<AspectRatio ratio={16 / 9} >
  <Image src="/ad.png" alt="Move In" fill />

</AspectRatio>
<AspectRatio ratio={16 / 9} >
  <Image src="/ad.png" alt="Move In" fill />

</AspectRatio>
<AspectRatio ratio={16 / 9} >
  <Image src="/ad.png" alt="Move In" fill />

</AspectRatio>

</div>
    </div>
  )
}

export default page