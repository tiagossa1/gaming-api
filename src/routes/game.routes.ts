import { Router } from "express";
const router = Router();

import {
  getAll,
  get,
  create,
  update,
  remove,
} from "../controllers/game.controller";

router.get("/games", getAll);
router.get("/games/:id", get);
router.post("/games", create);
router.put("/games/:id", update);
router.delete("/games/:id", remove);

export default router;
