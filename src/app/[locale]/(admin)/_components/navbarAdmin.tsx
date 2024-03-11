import React from 'react'

import {AdminMobileSidebar} from './mobileSidebarAdmin'
const AdminNavbar = () => {
    return (
        // {/* TODO: Mobile Sidebar */}

        <nav className='lg:hidden flex'>
            <div className='z-50 top-0 w-full h-14 border-b shadow-sm items-center flex'>
            <AdminMobileSidebar />
            </div>
        </nav>
    )
}

export default AdminNavbar