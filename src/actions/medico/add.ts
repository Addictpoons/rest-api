import { Request, Response } from "express";
import { add } from "../../services/medico";

export default async (request: Request, response: Response) => {
  const { name, especialidade } = request.body;

  const newMedico = await add(name, especialidade);

  return response.json(newMedico);
};
