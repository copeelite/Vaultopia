-- DropForeignKey
ALTER TABLE "LeaseDetailTemplateItem" DROP CONSTRAINT "LeaseDetailTemplateItem_leaseDetailTemplateId_fkey";

-- AddForeignKey
ALTER TABLE "LeaseDetailTemplateItem" ADD CONSTRAINT "LeaseDetailTemplateItem_leaseDetailTemplateId_fkey" FOREIGN KEY ("leaseDetailTemplateId") REFERENCES "LeaseDetailTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;
