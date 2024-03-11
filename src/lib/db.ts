// import { PrismaClient } from '@prisma/client'

// import "server-only"
// // use `prisma` in your application to read and write data in your DB

// declare global {
//     var cachedPrisma: PrismaClient | undefined
// }   

// let prisma: PrismaClient
// if (process.env.NODE_ENV === 'production') {
//     prisma = new PrismaClient()
// }
// else {
//     if (!global.cachedPrisma) {
//         global.cachedPrisma = new PrismaClient()
//     }
//     prisma = global.cachedPrisma
// }

// export const db = prisma
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
};

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
