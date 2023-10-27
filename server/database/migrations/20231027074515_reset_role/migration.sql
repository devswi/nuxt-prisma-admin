/*
  Warnings:

  - You are about to alter the column `createAt` on the `User` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `role` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Int`.
  - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `updateAt` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `phone` VARCHAR(191) NULL,
    MODIFY `createAt` DATETIME NOT NULL DEFAULT NOW(),
    MODIFY `updateAt` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    MODIFY `role` INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX `User_phone_key` ON `User`(`phone`);
