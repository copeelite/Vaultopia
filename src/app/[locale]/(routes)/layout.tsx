import React from "react";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { Root } from '@/components/layout/root/Root'

export default async function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) 
  {

    return (
      <div>
        <Root>
            {children}
        </Root>
        </div>
    )

}