
import {
    Compass,
    LayoutGrid,
    Mail,
    Scale,
    ReceiptText,
    Calendar,
    Settings,
    UserRoundCog
} from 'lucide-react';

import { LeaseTemplateList } from './types';

import { propertyList } from './PropertyList';



const rentalPropertyChildren = propertyList.properties.map(property => ({
    id: `${property.id}`,
    name: `${property.address}`, // or any other identifier you prefer
    href: `/${property.id}`,
}));


// Define an array of sidebar navigation items
export const SIDENAV_ITEMS: LeaseTemplateList[] = [
    {
        id: '1',
        name: 'Dashboard',
        icon: Compass,
        current: false,
    },
    {
        id: '1',
        name: 'Rental Property',
        icon: LayoutGrid,
        current: true,
        children: rentalPropertyChildren,

    },
    {
        id: '1',
        name: 'Notice',
        icon: Mail,
        current: false,
        badge: true,
    },
    {
        id: '1',
        name: 'Litigation',
        icon: Scale,
        current: false,
    },
    {
        id: '1',
        name: 'Maintenance',
        icon: ReceiptText,
        current: false,
        children: [

        ],
    },
    {
        id: '1',
        name: 'Screening Service',
        icon: Calendar,
        current: false,
    },
    {
        id: '1',
        name: 'Settings',
        icon: Settings,
        current: false,

    },

];






