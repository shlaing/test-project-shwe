/*
  Warnings:

  - A unique constraint covering the columns `[customerId,productId,size]` on the table `CartItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CartItem_customerId_productId_size_key" ON "CartItem"("customerId", "productId", "size");
