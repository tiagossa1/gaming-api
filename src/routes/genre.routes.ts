import { Router } from "express";
const router = Router();

import {
  getAll,
  get,
  create,
  update,
  remove,
} from "../controllers/genre.controller";

router.get("/genres", getAll);
router.get("/genres/:id", get);
router.post("/genres", create);
router.put("/genres/:id", update);
router.delete("/genres/:id", remove);

export default router;
