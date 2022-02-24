import { Router } from "express";
import { body } from "express-validator";

const router = Router();

import {
  getAll,
  get,
  create,
  update,
  remove,
} from "../controllers/developer.controller";

const validation = () => {
  body("name").notEmpty(),
    body("dateOfBirth").custom((value: Date, { req }) => {
      if (value.getFullYear() < 1900) {
        throw new Error("Date of birth should be greater than 1900/01/01.");
      }

      return true;
    });
};

router.get("/developers", getAll);
router.get("/developers/:id", get);
router.post("/developers", validation, create);
router.put("/developers/:id", validation, update);
router.delete("/developers/:id", remove);

export default router;
