import React from 'react';
import DashboardView from '@/components/layout/dashboard/dashboardView';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Property } from '@/components/layout/dashboard/PropertyListTypes';
import { propertyList } from '@/components/layout/dashboard/PropertyList';
interface DashBoardPageProps {
    params: { propertyId: string },
    //property: Property;
}

const DashboardPage: React.FC<DashBoardPageProps> =  (
    { params }
) => {

    const property = propertyList.properties.find(p => p.id === params.propertyId);
    if (!property) {
        return null;
    }
    const landlord = propertyList.landlords.find(l => l.id === property.landlordId);
    if (!landlord) {
        return null;
    }
    return (
        <div>
            {/* <h1 className='text-xl'>Rental Unit Address: Unit 1806 - 18 Peter Street, Toronto, ON M5M 1J2</h1> */}
            <h1 className='text-xl'>
            ({params.propertyId}) Rental Unit Address: {`${property.address}, ${property.city}, ${property.province}, ${property.postalCode}`}
            </h1>
            

            <div className='border-dashed border border-black dark:border-white w-full h-[85vh] mt-5 rounded-lg overflow-x-scroll min-w-max p-4'>
                <DashboardView property={property} landlord={landlord} />
            </div>
        </div>
    )
}

export default DashboardPage;
