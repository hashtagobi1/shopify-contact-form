/*
  Warnings:

  - You are about to drop the column `shop` on the `ContactForm` table. All the data in the column will be lost.
  - Added the required column `shopId` to the `ContactForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContactForm" DROP COLUMN "shop",
ADD COLUMN     "shopId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Shop" (
    "id" SERIAL NOT NULL,
    "shopName" TEXT NOT NULL,
    "logged_in_customer_id" TEXT NOT NULL,
    "path_prefix" TEXT NOT NULL,
    "timestamp" INTEGER NOT NULL,
    "signature" TEXT NOT NULL,

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shop_logged_in_customer_id_key" ON "Shop"("logged_in_customer_id");

-- AddForeignKey
ALTER TABLE "ContactForm" ADD CONSTRAINT "ContactForm_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
