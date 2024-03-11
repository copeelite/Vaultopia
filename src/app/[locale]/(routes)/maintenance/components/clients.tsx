"use client";

import React from 'react';
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table-test";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
//import { ApiList } from "@/components/ui/api-list";

import { RentPaymentColumn, columns } from "./columns"; // Assuming you have a similar setup for rent columns
import { Property } from '@/components/layout/dashboard/PropertyListTypes';

interface RentsClientProps {
  data: any;
  property: any;

};

export const MaintenanceClient: React.FC<RentsClientProps> = ({
  data, property
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col items-center">
      {/* <Heading title={`Rents Ledgers (${data.length})`} description={`(${params.propertyId}) ${property.address}, ${property.city}, ${property.province}, ${property.postalCode}`} /> */}
        {/* <Button onClick={() => router.push(`/dashboard/${params.propertyId}/rents/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New Rent Record
        </Button> */}
      </div>
      <Separator className="my-2 dark:bg-white bg-slate-500" />
      <DataTable searchKey="rentOwing" columns={columns} data={data} />
      {/* <Heading title="API" description="API Calls for Rents" />
      <Separator /> */}
      {/* <ApiList entityName="rents" entityIdName="paymentId" /> */}
    </div>
  );
};
