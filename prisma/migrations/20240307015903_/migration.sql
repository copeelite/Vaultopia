/*
  Warnings:

  - You are about to drop the column `leaseId` on the `LeaseDetail` table. All the data in the column will be lost.
  - You are about to drop the `Lease` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[leaseContractId]` on the table `LeaseDetail` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `leaseContractId` to the `LeaseDetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Lease" DROP CONSTRAINT "Lease_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "LeaseDetail" DROP CONSTRAINT "LeaseDetail_leaseId_fkey";

-- DropIndex
DROP INDEX "LeaseDetail_leaseId_key";

-- AlterTable
ALTER TABLE "LeaseDetail" DROP COLUMN "leaseId",
ADD COLUMN     "leaseContractId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Lease";

-- CreateTable
CREATE TABLE "LeaseContract" (
    "id" TEXT NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "deposit" DECIMAL(65,30) NOT NULL,
    "deposit_for_key" DECIMAL(65,30) NOT NULL,
    "unpaidMonths" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "monthly_rent" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "LeaseContract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeaseHistory" (
    "id" TEXT NOT NULL,
    "leaseId" TEXT NOT NULL,

    CONSTRAINT "LeaseHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeaseHistoryRecord" (
    "id" TEXT NOT NULL,
    "historyId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amountPaid" DECIMAL(65,30) NOT NULL,
    "description" TEXT,

    CONSTRAINT "LeaseHistoryRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tenant" (
    "id" TEXT NOT NULL,
    "leaseId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeaseDetailItem" (
    "id" TEXT NOT NULL,
    "leaseDetailId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "LeaseDetailItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LeaseHistory_leaseId_key" ON "LeaseHistory"("leaseId");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_email_key" ON "Tenant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "LeaseDetail_leaseContractId_key" ON "LeaseDetail"("leaseContractId");

-- AddForeignKey
ALTER TABLE "LeaseContract" ADD CONSTRAINT "LeaseContract_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaseHistory" ADD CONSTRAINT "LeaseHistory_leaseId_fkey" FOREIGN KEY ("leaseId") REFERENCES "LeaseContract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaseHistoryRecord" ADD CONSTRAINT "LeaseHistoryRecord_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "LeaseHistory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tenant" ADD CONSTRAINT "Tenant_leaseId_fkey" FOREIGN KEY ("leaseId") REFERENCES "LeaseContract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaseDetail" ADD CONSTRAINT "LeaseDetail_leaseContractId_fkey" FOREIGN KEY ("leaseContractId") REFERENCES "LeaseContract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaseDetailItem" ADD CONSTRAINT "LeaseDetailItem_leaseDetailId_fkey" FOREIGN KEY ("leaseDetailId") REFERENCES "LeaseDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
