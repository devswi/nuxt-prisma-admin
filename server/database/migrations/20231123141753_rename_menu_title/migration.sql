/*
  Warnings:

  - You are about to drop the column `name` on the `menu` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `menu` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `menu` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "menu_name_key";

-- AlterTable
ALTER TABLE "menu" DROP COLUMN "name",
ADD COLUMN     "description" VARCHAR(255),
ADD COLUMN     "title" VARCHAR(50) NOT NULL,
ALTER COLUMN "id" SET DEFAULT nanoid(5, 'abcdefghijklmnopqrstuvwxyz'),
ALTER COLUMN "icon" DROP NOT NULL;

-- AlterTable
ALTER TABLE "menu_role" ALTER COLUMN "id" SET DEFAULT nanoid(5, 'abcdefghijklmnopqrstuvwxyz');

-- AlterTable
ALTER TABLE "role" ALTER COLUMN "id" SET DEFAULT nanoid(5, 'abcdefghijklmnopqrstuvwxyz');

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT nanoid(5, 'abcdefghijklmnopqrstuvwxyz');

-- AlterTable
ALTER TABLE "user_role" ALTER COLUMN "id" SET DEFAULT nanoid(5, 'abcdefghijklmnopqrstuvwxyz');

-- CreateIndex
CREATE UNIQUE INDEX "menu_title_key" ON "menu"("title");
