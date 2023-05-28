import express from "express";
import { list, add, detail, remove, update } from "../actions/utente";

const router = express.Router();

router.get("", list);
router.post("", add);
router.get("/:id", detail);
router.delete("/:id", remove);
router.put("/:id", update);

export default router;
