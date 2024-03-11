"use client"
import React, { useState } from 'react';
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";
import { toast } from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { RentPaymentColumn, columns } from "./columns"; // Assuming you have a similar setup for rent columns

import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
// import { AlertModal } from "@/components/modals/alert-modal";

interface CellActionProps {
  data: RentPaymentColumn; // Adjusted for rent payment data
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onConfirmDelete = async () => {
    // try {
    //   setLoading(true);
    //   // Adjust the API endpoint according to your backend setup for deleting rent records
    //   await axios.delete(`/api/rents/${data.paymentId}`);
    //   toast.success('Rent record deleted successfully.');
    //   router.refresh(); // Refresh the current page to reflect the deletion
    // } catch (error) {
    //   toast.error('Error deleting rent record. Please try again.');
    // } finally {
    //   setOpen(false);
    //   setLoading(false);
    // }
  };

  const onCopyPaymentId = () => {
    navigator.clipboard.writeText(data.paymentId.toString());
    toast.success('Payment ID copied to clipboard.');
  };

  return (
    <>
      {/* <AlertModal 
        isOpen={open} 
        onClose={() => setOpen(false)}
        onConfirm={onConfirmDelete}
        loading={loading}
        // You might want to adjust modal props (title, message, etc.) to fit the rent context
      /> */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopyPaymentId()}>
            <Copy className="mr-2 h-4 w-4" /> Copy Payment ID
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`/dashboard/rents/edit/${data.paymentId}`)}>
            <Edit className="mr-2 h-4 w-4" /> Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
