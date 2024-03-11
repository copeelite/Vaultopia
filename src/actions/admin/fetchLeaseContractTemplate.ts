"use server";

import { db } from "@/lib/db";
import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";


export async function fetchLeaseContractTemplate(){
  const role = await currentRole();
  if (role === UserRole.ADMIN) {
    const LeaseDetailTemplate = await db.leaseDetailTemplate.findMany();
    return LeaseDetailTemplate;
  }
  return [];
}
