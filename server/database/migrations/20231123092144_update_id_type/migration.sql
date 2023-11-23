/*
  Warnings:

  - You are about to alter the column `parent_id` on the `menu` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(5)`.
  - You are about to alter the column `menu_id` on the `menu_role` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(5)`.
  - You are about to alter the column `role_id` on the `menu_role` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(5)`.
  - You are about to alter the column `user_id` on the `user_role` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(5)`.
  - You are about to alter the column `role_id` on the `user_role` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(5)`.

*/
-- DropForeignKey
ALTER TABLE "menu" DROP CONSTRAINT "menu_parent_id_fkey";

-- DropForeignKey
ALTER TABLE "menu_role" DROP CONSTRAINT "menu_role_menu_id_fkey";

-- DropForeignKey
ALTER TABLE "menu_role" DROP CONSTRAINT "menu_role_role_id_fkey";

-- DropForeignKey
ALTER TABLE "user_role" DROP CONSTRAINT "user_role_role_id_fkey";

-- DropForeignKey
ALTER TABLE "user_role" DROP CONSTRAINT "user_role_user_id_fkey";

-- AlterTable
ALTER TABLE "menu" ALTER COLUMN "id" SET DEFAULT nanoid(5, 'abcdefghijklmnopqrstuvwxyz'),
ALTER COLUMN "parent_id" SET DATA TYPE CHAR(5);

-- AlterTable
ALTER TABLE "menu_role" ALTER COLUMN "id" SET DEFAULT nanoid(5, 'abcdefghijklmnopqrstuvwxyz'),
ALTER COLUMN "menu_id" SET DATA TYPE CHAR(5),
ALTER COLUMN "role_id" SET DATA TYPE CHAR(5);

-- AlterTable
ALTER TABLE "role" ALTER COLUMN "id" SET DEFAULT nanoid(5, 'abcdefghijklmnopqrstuvwxyz');

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT nanoid(5, 'abcdefghijklmnopqrstuvwxyz');

-- AlterTable
ALTER TABLE "user_role" ALTER COLUMN "id" SET DEFAULT nanoid(5, 'abcdefghijklmnopqrstuvwxyz'),
ALTER COLUMN "user_id" SET DATA TYPE CHAR(5),
ALTER COLUMN "role_id" SET DATA TYPE CHAR(5);

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu" ADD CONSTRAINT "menu_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "menu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_role" ADD CONSTRAINT "menu_role_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menu"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_role" ADD CONSTRAINT "menu_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
