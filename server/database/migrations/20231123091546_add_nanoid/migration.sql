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
