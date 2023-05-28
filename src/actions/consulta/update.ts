import { Request, Response } from "express";
import { update, detail } from "../../services/consulta";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const existingConsulta = await detail(id);
  if (!existingConsulta) {
    return response.status(404).json({
      code: 404,
      message: "Consulta não encontrada",
    });
  }

  const updatedConsulta = await update(id, request.body);

  return response.json(updatedConsulta);
};
