"use server"

import {db} from "@/lib/db"

export async function fetchUsers() {
  const users = await db.user.findMany()
  return users
}