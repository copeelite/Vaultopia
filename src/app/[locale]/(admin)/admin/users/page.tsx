import React from 'react'
import { db } from '@/lib/db'
import { fetchUsers } from '@/actions/admin/fetchUsers'
const UserPage = async () => {
  const users = await fetchUsers() 
  return (
    <div>
      <h1>Users</h1>
      {
        users.map(user => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  )
}

export default UserPage