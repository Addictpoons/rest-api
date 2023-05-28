import express, { Request, Response } from "express";
import { name, version } from "../../package.json";
import utenteRoutes from "./utente";
import consultaRoutes from "./consulta";
import medicoRoutes from "./medico";
import authRoutes from "./auth";

const router = express.Router();

router.get("/", (req: Request, res: Response) => res.json({ name, version }));

router.use("/auth", authRoutes);
router.use("/utente", utenteRoutes);
router.use("/consulta", consultaRoutes);
router.use("/medico", medicoRoutes);

export default router;
