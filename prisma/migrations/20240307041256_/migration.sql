-- CreateTable
CREATE TABLE "LeaseDetailTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "LeaseDetailTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeaseDetailTemplateItem" (
    "id" TEXT NOT NULL,
    "leaseDetailTemplateId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "options" TEXT NOT NULL,
    "defaultValue" TEXT,

    CONSTRAINT "LeaseDetailTemplateItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LeaseDetailTemplateItem" ADD CONSTRAINT "LeaseDetailTemplateItem_leaseDetailTemplateId_fkey" FOREIGN KEY ("leaseDetailTemplateId") REFERENCES "LeaseDetailTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
