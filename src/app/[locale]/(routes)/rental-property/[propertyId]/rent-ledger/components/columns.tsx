"use client";

import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action'; // Ensure this component is correctly implemented



// Assuming your mock data is imported or defined elsewhere

export type RentPaymentColumn = {
  paymentId: number;
  rentStartDate: string;
  rentEndDate: string;
  rentTotal: string;
  rentPaid: string;
  paidDate: string;
  rentOwing: string;
  note?: string;
  status?: string;
  reminder?: string;
};

export const columns: ColumnDef<RentPaymentColumn>[] = [
  // Existing columns...
  {
    accessorKey: 'paymentId',
    header: 'ID',
  },
  {
    accessorKey: 'rentStartDate',
    header: 'Start Date',
  },
  {
    accessorKey: 'rentEndDate',
    header: 'End Date',
  },
  {
    accessorKey: 'rentTotal',
    header: 'Lawful Rent',
  },
  {
    accessorKey: 'rentPaid',
    header: 'Paid',
  },
  {
    accessorKey: 'paidDate',
    header: 'Paid Date',
  },
  {
    accessorKey: 'rentOwing',
    header: 'Arrears',
  },
  {
    accessorKey: 'note',
    header: 'Note',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ getValue }) => {
      const value:any = getValue(); // Explicitly type value as string
      return <span className={value === 'Paid' ? 'text-green-500' : 'text-red-500'}>{value}</span>;
    },
  },
  {
    accessorKey: 'reminder',
    header: 'Reminder',
  },
  // Include any additional columns like the actions column you have
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];