import { PrismaClient, Consulta } from "@prisma/client";
import dayjs from "dayjs";

export const prisma = new PrismaClient();

const all = () => prisma.consulta.findMany({
    where: {
        deleted: false,
    },
})

const detail = (id: string) => prisma.consulta.findFirst({
    where: { id, deleted: false },
});

const add = (datehour: Date, room: string, observations: string, medicoName: string, utenteName: string ) => prisma.consulta.create({
    data: {
        datehour: dayjs(datehour).format("YYYY-MM-DDTHH:mm:ss.SSSZ"), 
        room,
        observations,
        medicoName: medicoName,
        utenteName: utenteName,
    },
});

const remove = (id: string) => prisma.consulta.update({
    where: {id},
    data: { deleted: true },
})

const update = (id: string, consulta: Consulta) => prisma.consulta.update({
    where: { id }, 
    data: consulta, 
})

export { all, detail, add, remove, update }; 