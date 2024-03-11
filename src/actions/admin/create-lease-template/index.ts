"use server";

import { InputType, ReturnType } from "./types";
import { currentRole } from "@/lib/auth";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { CreateLeaseDetailTemplate } from "./schema";
const handler = async (data: InputType): Promise<ReturnType> => {
  const user = await currentRole();
  if (user != "ADMIN") {
    return {
      error: "unauthorized",
    };
  }
  const { name, description} = data;
  let leaseTemplate;
  try {
    leaseTemplate = await db.leaseDetailTemplate.create({
        data: {
            name,
            description,
        }
    });
  } catch (error) {
    console.error(error);
    return {
      error: `Failed to create lease template: ${error}`,
    };
  
  }
  revalidatePath("/admin/lease-editor");
  return {
    data: leaseTemplate,
  };
};

export const createLeaseDetailTemplate = createSafeAction(
  CreateLeaseDetailTemplate,
  handler
);
