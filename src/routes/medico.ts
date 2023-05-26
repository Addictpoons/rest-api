import express from "express";
import { add, detail, list, remove, update } from "../actions/medico";

const router = express.Router();

router.post("", add);
router.get("/:id", detail);
router.get("", list );
router.delete("/:id", remove);
router.put(":/id", update);


export default router;