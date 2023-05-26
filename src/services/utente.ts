import { PrismaClient, Utente } from "@prisma/client";
export const prisma = new PrismaClient();

const all = () => prisma.utente.findMany({
    where: {
        deleted: false,
    }
});

const detail = (id: string) => prisma.utente.findFirst({
    where: {
        id,
        deleted: false,
    }
})

const add = (name: string, age: number, gender: string, address: string, contact: number) => prisma.utente.create({
    data: {
       name,
       age,
       gender,
       address,
       contact
    }
});

const remove = async (id: string) => {
    const removeUtente = await prisma.utente.update({
        where: { id },
        data: {
            deleted: true
        },
    });
    return removeUtente;
}

const update = (id: string, utente: Utente) => prisma.utente.update({
    where: { id },
    data: utente,
})

export { all, detail, add, remove, update}
