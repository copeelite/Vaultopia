import React, { useState, useCallback } from 'react'
import LeaseTemplateList from '@/app/[locale]/(admin)/admin/lease-editor/lease-template-list'
import LeaseTemplateForm from '@/app/[locale]/(admin)/admin/lease-editor/lease-template-form'
import { MaintenanceClient } from './components/clients'
import { fetchLeaseContractTemplate } from '@/actions/admin/fetchLeaseContractTemplate'
import { LeaseTemplateList as LeaseTemplateListType } from '@/app/[locale]/(admin)/admin/lease-editor/_components/types'
import { db } from '@/lib/db'

import { propertyList } from '@/components/layout/dashboard/PropertyList';

const property = propertyList.properties
const landlord = propertyList.landlords
const maintenanceData = propertyList.maintenanceRequests;

const page = async () => {
  const leaseContractTemplates = await fetchLeaseContractTemplate()
  return (
    <div className="overflow-auto max-h-screen">
      <LeaseTemplateList/>
      {/* <LeaseTemplateForm /> */}

      <MaintenanceClient data={maintenanceData} property={property} />

    </div>
  )
}

export default page