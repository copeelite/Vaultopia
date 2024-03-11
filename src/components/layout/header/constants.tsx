
import {
    Compass,
    LayoutGrid,
    Mail,
    Scale,
    ReceiptText,
    Calendar,
    Settings,
    UserRoundCog,
    GanttChartSquare
} from 'lucide-react';

import { SideNavItem } from './types';
import { Shield } from 'lucide-react';
import { Wrench } from 'lucide-react';

import { ManagementSystem } from '@/components/layout/dashboard/PropertyListTypes'; // Adjust the import path as necessary
import { propertyList } from '@/components/layout/dashboard/PropertyList'; // Import your mock data
import { useCurentRole } from '@/hooks/auth/use-current-role'
import { GraduationCap } from 'lucide-react';



const rentalPropertyChildren = propertyList.properties.map(property => ({
    name: `${property.address}`, // or any other identifier you prefer
    href: `/${property.id}`,
}));


// Define an array of sidebar navigation items
export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        name: 'Dashboard',
        icon: Compass,
        current: false,
        href: '/dashboard'
    },
    {
        name: 'Manage Agreement',
        icon: LayoutGrid,
        current: false,
        href: '/rental-property',
        children: rentalPropertyChildren,

    },
    {
        name: 'Star New Agreement',
        icon: Scale,
        current: false,
        href: '/start-agreement',
    },
    {
        name: 'Notice',
        icon: Mail,
        current: false,
        href: '/notice',
        badge: true,
    },
    
    {
        name: 'Maintenance',
        icon: ReceiptText,
        current: false,
        href: '/maintenance',
    },
    // {
    //     name: 'Screening Service',
    //     href: '/screening-service',
    //     icon: Calendar,
    //     current: false,
    // },
    
    {
        name: 'SafeInfo',
        href: '/safeinfo',
        icon: Shield,
        current: false,

    },
    {
        name: 'Education',
        href: '/education',
        icon: GraduationCap,
        current: false,

    },
    {
        name: 'Settings',
        href: '/settings',
        icon: Settings,
        current: false,

    },
    // {
    //     name: 'Admin',
    //     icon: UserRoundCog,
    //     current: false,
    //     href: '/admin',
    // },
];

export const SIDENAV_ITEMS_ADMIN: SideNavItem[] = [
    {
        name: 'Admin',
        icon: UserRoundCog,
        current: false,
        href: '/admin',
    }];
import { LayoutDashboard, Users } from 'lucide-react';
export const SIDENAV_ADMIN_DASHBOARD: SideNavItem[] = [
    {
        name: 'Home',
        icon: LayoutDashboard,
        current: false,
        href: '/admin'
    },
    {
        name: 'Users',
        icon: Users,
        current: false,
        href: '/admin/users',
    },
    {
        name: 'Lease Manager',
        icon: GanttChartSquare,
        current: false,
        href: '/admin/lease-editor',
    }
    
    
]





// const navigation = [
//     { name: 'Dashboard', href: '#', icon: Compass, current: true },
//     {
//         name: 'Rental Property',
//         icon: LayoutGrid,
//         current: false,
//         children: [
//             { name: 'Engineering', href: '#', current: true },
//             { name: 'Human Resources', href: '#' },
//             { name: 'Customer Success', href: '#' },
//         ],
//     },
//     {
//         name: 'Notice',
//         icon: Mail,
//         current: false,
//         children: [
//             { name: 'GraphQL API', href: '#' },
//             { name: 'iOS App', href: '#' },
//             { name: 'Android App', href: '#' },
//             { name: 'New Customer Portal', href: '#' },
//         ],
//     },
//     {
//         name: 'Litigation', href: '#', icon: Scale, current: false,
//         children: [

//         ],
//     },
//     {
//         name: 'Maintenance', href: '#', icon: ReceiptText, current: false,
//         children: [

//         ],
//     },
//     { name: 'Screening Service', href: '#', icon: Calendar, current: false },
//     { name: 'Settings', href: '#', icon: Settings, current: false },

// ]