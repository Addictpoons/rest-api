import { Request, Response } from "express";
import { update, detail } from "../../services/utente";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detail(id))) {
    return response.status(404).json({
      code: 404,
      message: "Utente não encontrado",
    });
  }

  const utente = await update(id, request.body);

  return response.json(utente);
};
