import { PrismaClient, Consulta } from "@prisma/client";
import dayjs from "dayjs";

export const prisma = new PrismaClient();

const all = () => prisma.consulta.findMany({
    where: {
        deleted: false,
    },
    include: {
        utente: { select : { name: true} },
        medico: { select: { name: true, especialidade: true} }
    }
})

const detail = (id: string) => prisma.consulta.findFirst({
    where: { id, deleted: false },
    include: {
     utente: true,
     medico: true,
    } 
});

const add = (datehour: Date, room: string, observations: string, medicoId: string, utenteId: string ) => prisma.consulta.create({
    data: {
        datehour: dayjs(datehour).format("YYYY-MM-DDTHH:mm:ss.SSSZ"), 
        room,
        observations,
        medico: { connect: { id: medicoId }, },
        utente: { connect: { id: utenteId }, },
    },
    include: {
        utente: { select: { name: true } },
        medico: { select: { name: true, especialidade: true } },
    },
});

const remove = (id: string) => prisma.consulta.update({
    where: {id},
    data: { deleted: true },
})

const update = (id: string, consulta: Consulta) => prisma.consulta.update({
    where: { id }, 
    data: consulta, 
    include: {
        utente: true,
        medico: true,
    }
})

export { all, detail, add, remove, update }; 