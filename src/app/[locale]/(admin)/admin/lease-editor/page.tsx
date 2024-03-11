
import React, { useState, useCallback } from 'react'
import LeaseTemplateList from './lease-template-list'
import LeaseTemplateForm from './lease-template-form'

import { fetchLeaseContractTemplate } from '@/actions/admin/fetchLeaseContractTemplate'
import { LeaseTemplateList as LeaseTemplateListType } from './_components/types'
import {db} from '@/lib/db'
const LeaseEditor = async () => {
  const leaseContractTemplates = await fetchLeaseContractTemplate()
  return (
    <div className="overflow-auto max-h-screen">
      <LeaseTemplateList/>
      {/* <LeaseTemplateForm /> */}
    </div>
  )
}

export default LeaseEditor