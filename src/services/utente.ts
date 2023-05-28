import { PrismaClient, Utente } from "@prisma/client";
export const prisma = new PrismaClient();

const all = () =>
  prisma.utente.findMany({
    where: {
      deleted: false,
    },
  });

const detail = (id: string) =>
  prisma.utente.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const add = (
  name: string,
  age: string,
  gender: string,
  address: string,
  contact: string
) =>
  prisma.utente.create({
    data: {
      name,
      age,
      gender,
      address,
      contact,
    },
  });

const remove = (id: string) =>
  prisma.utente.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

const update = (id: string, utente: Utente) =>
  prisma.utente.update({
    where: { id },
    data: utente,
  });

export { all, add, remove, update, detail };
