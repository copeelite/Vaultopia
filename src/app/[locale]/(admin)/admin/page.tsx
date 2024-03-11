"use client";

import React from 'react'
import { useCurentRole } from '@/hooks/auth/use-current-role'
import { RoleGate } from '@/components/auth/role-gate';
import { Button } from '@/components/ui/button'
import {toast} from 'sonner'

import {admin} from '@/actions/admin'

const AdminPage = () => {
  const role = useCurentRole()
  const onServerActionClick = () => {
    admin().then((data) => {
      if(data.error) {
        toast.error('Server Action Failed')
      }
      else {
        toast.success('Server Action Success')
      }
    })
  }
  const onApiRouteClick = () => {
    fetch('/api/admin').then
      ((res) =>
      {
        if (res.ok) {
          toast.success('API Route Success')
        }
        else {
          toast.error('API Route Failed')
          }
        }
    )
  }
  return (
    <div>
      {/* <RoleGate allowedRole="ADMIN"> */}
        <div>
          <h1>Admin Dashboard Page, Role: {role}</h1>
        </div>
      {/* <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-md'>
        <p>
          Admin-only API Route
        </p>
        <Button onClick={onApiRouteClick}>
          Click to test
        </Button>
      </div>
      <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-md'>
        <p>
          Admin-only Server Action
        </p>
        <Button onClick={onServerActionClick}>
          Click to test
        </Button>
      </div> */}
      {/* </RoleGate> */}
    </div>

  )
}

export default AdminPage