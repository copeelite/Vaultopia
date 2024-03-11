import { Separator } from "@/components/ui/separator"
import React from 'react'
import { format } from "date-fns";

import { Property } from '@/components/layout/dashboard/PropertyListTypes';
import { propertyList } from '@/components/layout/dashboard/PropertyList';

import { RentsClient } from "./components/clients";
import paymentsData from '@/../mockDataForTable/fakeData13.json'; // Adjust the path as necessary


interface LedgerProps {
  params: { propertyId: string },
  //property: Property;
}
const Ledger: React.FC<LedgerProps> = ({ params }) => {
  const property = propertyList.properties.find(p => p.id === params.propertyId);
  if (!property) {
    return null;
  }
  return (
    <div>
      {/* <h1 className='text-xl'>Rental Unit Address: Unit 1806 - 18 Peter Street, Toronto, ON M5M 1J2</h1> */}

      {/* <div className="flex-1 overflow-auto h-[90vh]"> */}
      <div className="overflow-auto h-[90vh]">
        <RentsClient data={paymentsData} property={property} />
      </div>
    </div>

  )
}

export default Ledger