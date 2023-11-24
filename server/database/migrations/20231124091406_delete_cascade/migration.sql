-- DropForeignKey
ALTER TABLE "menu_role" DROP CONSTRAINT "menu_role_menu_id_fkey";

-- DropForeignKey
ALTER TABLE "user_role" DROP CONSTRAINT "user_role_user_id_fkey";

-- AlterTable
ALTER TABLE "menu" ALTER COLUMN "id" SET DEFAULT nanoid(5, 'abcdefghijklmnopqrstuvwxyz');

-- AlterTable
ALTER TABLE "menu_role" ALTER COLUMN "id" SET DEFAULT nanoid(5, 'abcdefghijklmnopqrstuvwxyz');

-- AlterTable
ALTER TABLE "role" ALTER COLUMN "id" SET DEFAULT nanoid(5, 'abcdefghijklmnopqrstuvwxyz');

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT nanoid(5, 'abcdefghijklmnopqrstuvwxyz');

-- AlterTable
ALTER TABLE "user_role" ALTER COLUMN "id" SET DEFAULT nanoid(5, 'abcdefghijklmnopqrstuvwxyz');

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_role" ADD CONSTRAINT "menu_role_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
