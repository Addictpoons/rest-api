/*
  Warnings:

  - You are about to drop the column `medicoId` on the `consulta` table. All the data in the column will be lost.
  - You are about to drop the column `utenteId` on the `consulta` table. All the data in the column will be lost.
  - Added the required column `medicoName` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `utenteName` to the `Consulta` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `consulta` DROP FOREIGN KEY `Consulta_medicoId_fkey`;

-- DropForeignKey
ALTER TABLE `consulta` DROP FOREIGN KEY `Consulta_utenteId_fkey`;

-- AlterTable
ALTER TABLE `consulta` DROP COLUMN `medicoId`,
    DROP COLUMN `utenteId`,
    ADD COLUMN `medicoName` VARCHAR(191) NOT NULL,
    ADD COLUMN `utenteName` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Consulta` ADD CONSTRAINT `Consulta_utenteName_fkey` FOREIGN KEY (`utenteName`) REFERENCES `Utente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consulta` ADD CONSTRAINT `Consulta_medicoName_fkey` FOREIGN KEY (`medicoName`) REFERENCES `Medico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
