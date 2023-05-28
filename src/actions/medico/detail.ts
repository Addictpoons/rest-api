import { Request, Response } from "express";
import { detail } from "../../services/medico";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const medico = await detail(id);

  if (!medico) {
    return response.status(404).json({
      code: 404,
      message: "Medico não encontrado",
    });
  }

  return response.json(medico);
};
