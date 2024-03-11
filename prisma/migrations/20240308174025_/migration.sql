/*
  Warnings:

  - You are about to drop the `LeaseDetailTemplateItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LeaseDetailTemplateItem" DROP CONSTRAINT "LeaseDetailTemplateItem_leaseDetailTemplateId_fkey";

-- DropTable
DROP TABLE "LeaseDetailTemplateItem";
