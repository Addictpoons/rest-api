import { Request, Response } from "express";
import { add } from "../../services/consulta";

export default async (request: Request, response: Response) => {
    const { datehour, room, observations, medicoName, utenteName } = request.body;

    const newConsulta = await add (datehour, room, observations, medicoName, utenteName)

    return response.json(newConsulta);
};