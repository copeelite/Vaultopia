"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail, getUserByUserName } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { username, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Check for existing email
  const existingUserByEmail = await getUserByEmail(email);

  if (existingUserByEmail) {
    return { error: "Email already in use!" };
  }

  //Check for existing username
  const existingUserByUsername = await getUserByUserName(username)
  if (existingUserByUsername) {
    return { error: "Username already in use!" };
  }

  await db.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  //TODO: Send verification token email

  return { success: "User created!" };
};
