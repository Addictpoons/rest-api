import { Request, Response } from "express";
import { add } from "../../services/utente";

export default async (request: Request, response: Response) => {
  const { name, age, gender, address, contact } = request.body;

  const newUtente = await add(name, age, gender, address, contact);

  return response.json(newUtente);
};
