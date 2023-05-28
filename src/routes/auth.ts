import { Router } from "express";
import { login, profile, register } from "../actions/auth";

const router = Router();

router.post("/login", login); // formulario post. pass nao pode aparecer logo n e get
router.get("/profile", profile); // se quiser fzr update, post
router.post("/register", register);

export default router;
