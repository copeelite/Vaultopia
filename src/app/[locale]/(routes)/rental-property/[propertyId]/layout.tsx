import React from "react";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
export default async function DashboardLayout(


    {
        children, params
    } :
    {
        children: React.ReactNode,
        params: {storeId: string}
    }

) {

    return (
        <div>
            {children}
        </div>
    )

}