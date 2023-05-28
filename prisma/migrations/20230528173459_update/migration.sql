/*
  Warnings:

  - You are about to drop the column `medicoId` on the `consulta` table. All the data in the column will be lost.
  - You are about to drop the column `utenteId` on the `consulta` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Medico` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Utente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `medicoName` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `utenteName` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Made the column `observations` on table `consulta` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `consulta` DROP FOREIGN KEY `Consulta_medicoId_fkey`;

-- DropForeignKey
ALTER TABLE `consulta` DROP FOREIGN KEY `Consulta_utenteId_fkey`;

-- AlterTable
ALTER TABLE `consulta` DROP COLUMN `medicoId`,
    DROP COLUMN `utenteId`,
    ADD COLUMN `medicoName` VARCHAR(191) NOT NULL,
    ADD COLUMN `utenteName` VARCHAR(191) NOT NULL,
    MODIFY `room` VARCHAR(255) NOT NULL,
    MODIFY `observations` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Medico_name_key` ON `Medico`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Utente_name_key` ON `Utente`(`name`);

-- AddForeignKey
ALTER TABLE `Consulta` ADD CONSTRAINT `Consulta_medicoName_fkey` FOREIGN KEY (`medicoName`) REFERENCES `Medico`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consulta` ADD CONSTRAINT `Consulta_utenteName_fkey` FOREIGN KEY (`utenteName`) REFERENCES `Utente`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
