-- DropForeignKey
ALTER TABLE "Leads" DROP CONSTRAINT "Leads_userId_fkey";

-- AlterTable
ALTER TABLE "Leads" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Leads" ADD CONSTRAINT "Leads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
