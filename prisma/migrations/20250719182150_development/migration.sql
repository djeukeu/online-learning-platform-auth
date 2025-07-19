/*
  Warnings:

  - You are about to drop the column `status` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `status`,
    ADD COLUMN `role` ENUM('ADMIN', 'STUDENT', 'INSTRUCTOR') NOT NULL DEFAULT 'STUDENT';
