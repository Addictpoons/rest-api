import { Request, Response } from "express";
import { add } from "../../services/consulta";

export default async (request: Request, response: Response) => {
    const { date, hour, room, observations, medicoId, utenteId } = request.body;

    const newConsulta = await add (date, hour, room, observations, medicoId, utenteId)

    return response.json(newConsulta);
};