/*
  Warnings:

  - You are about to drop the column `shopId` on the `ContactForm` table. All the data in the column will be lost.
  - Added the required column `shop` to the `ContactForm` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ContactForm" DROP CONSTRAINT "ContactForm_shopId_fkey";

-- AlterTable
ALTER TABLE "ContactForm" DROP COLUMN "shopId",
ADD COLUMN     "shop" TEXT NOT NULL;
