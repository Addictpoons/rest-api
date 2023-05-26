/*
  Warnings:

  - You are about to drop the column `date` on the `consulta` table. All the data in the column will be lost.
  - You are about to drop the column `hour` on the `consulta` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `consulta` DROP COLUMN `date`,
    DROP COLUMN `hour`,
    ADD COLUMN `datehour` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
