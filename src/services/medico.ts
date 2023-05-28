import { PrismaClient, Medico } from "@prisma/client";
export const prisma = new PrismaClient();

const all = () =>
  prisma.medico.findMany({
    where: {
      deleted: false,
    },
  });

const detail = (id: string) =>
  prisma.medico.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const add = (name: string, especialidade: string) =>
  prisma.medico.create({
    data: {
      name,
      especialidade,
    },
  });

const remove = async (id: string) => {
  prisma.medico.update({
    where: {
      id,
    },
    data: {
      deleted: true,
    },
  });
};

const update = (id: string, medico: Medico) =>
  prisma.medico.update({
    where: { id },
    data: medico,
  });

export { all, detail, add, remove, update };
