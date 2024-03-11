
import { RootForAdmin } from '@/components/layout/root/RootForAdmin'
import { RoleGate } from '@/components/auth/role-gate';
import { Toaster } from "@/components/ui/sonner"
import { Toaster as Toaster2 } from '@/components/ui/toaster'

import AdminNavbar from './_components/navbarAdmin';
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full">
            <RoleGate allowedRole="ADMIN">
            <AdminNavbar />
            <RootForAdmin>
                <Toaster />
                <Toaster2 />
                {children}
            </RootForAdmin>
            </RoleGate>
        </div>
    )
}