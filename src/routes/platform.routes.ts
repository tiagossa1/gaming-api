import { Router } from "express";
const router = Router();

import {
  getAll,
  get,
  create,
  update,
  remove,
} from "../controllers/platform.controller";

router.get("/platforms", getAll);
router.get("/platforms/:id", get);
router.post("/platforms", create);
router.put("/platforms/:id", update);
router.delete("/platforms/:id", remove);

export default router;
