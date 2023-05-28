import dayjs from "dayjs";
import { PrismaClient, Consulta } from "@prisma/client";
export const prisma = new PrismaClient();

const all = () =>
  prisma.consulta.findMany({
    where: {
      deleted: false,
    },
    include: {
      utente: { select: { name: true } },
      medico: { select: { name: true, especialidade: true } },
    },
  });

const detail = (id: string) =>
  prisma.consulta.findFirst({
    where: {
      id,
      deleted: false,
    },
    include: {
      medico: {
        select: {
          name: true,
          especialidade: true,
        },
      },
      utente: {
        select: {
          name: true,
        },
      },
    },
  });

const add = (
  datehour: Date | string,
  room: string,
  observations: string,
  medicoName: string,
  utenteName: string
) =>
  prisma.consulta.create({
    data: {
      datehour: dayjs(datehour).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
      room,
      observations,
      medico: {
        connect: { name: medicoName },
      },
      utente: {
        connect: { name: utenteName },
      },
    },
    include: {
      medico: {
        select: {
          name: true,
          especialidade: true,
        },
      },
      utente: {
        select: {
          name: true,
        },
      },
    },
  });

const update = (id: string, consulta: Consulta) =>
  prisma.consulta.update({
    where: { id },
    data: consulta,
    include: {
      utente: {
        select: {
          name: true,
        },
      },
      medico: {
        select: {
          name: true,
          especialidade: true,
        },
      },
    },
  });

const remove = (id: string) =>
  prisma.consulta.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { all, detail, add, update, remove };
