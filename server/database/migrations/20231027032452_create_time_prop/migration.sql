/*
  Warnings:

  - You are about to alter the column `createAt` on the `User` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.
  - You are about to alter the column `updateAt` on the `User` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `createAt` DATETIME NOT NULL DEFAULT NOW(),
    MODIFY `updateAt` DATETIME NULL DEFAULT NOW() ON UPDATE NOW();
