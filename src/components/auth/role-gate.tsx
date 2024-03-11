"use client";
import {UserRole} from "@prisma/client"
import { useCurentRole } from '@/hooks/auth/use-current-role'
import {FormError} from '@/components/ui/auth/form-error'
import { Skeleton } from "@/components/ui/skeleton"

interface RoleGateProps {
    children: React.ReactNode
    allowedRole: UserRole
}

export const RoleGate: React.FC<RoleGateProps> = ({ children, allowedRole }) => {
    const role = useCurentRole()
    if (role === undefined) {
        // Display a loading message or spinner
        return <Skeleton className="w-full h-[30px] rounded-full" />
        // Customize this as needed
    }
    if(role !== allowedRole) {
        return (
            <FormError message="You do not have permission to view this content!" />
        )
    }
    return (
        <>{children}</>
    )
}