import express from "express";
import { add, list, detail, remove, update } from "../actions/consulta";

const router = express.Router();

router.post("", add);
router.get("", list);
router.get("/:id", detail);
router.delete("/:id", remove);
router.put("/:id", update);

export default router;
