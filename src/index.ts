import express from "express";
import morgan from "morgan";
import cors from "cors";
import "reflect-metadata";

import { createConnection } from "typeorm";

import developerRoutes from "./routes/developer.routes";
import gameRoutes from "./routes/game.routes";
import genreRoutes from "./routes/genre.routes";
import platformRoutes from "./routes/platform.routes";

const app = express();
createConnection();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use(developerRoutes);
app.use(gameRoutes);
app.use(genreRoutes);
app.use(platformRoutes);

app.listen(3001);

console.log("Server on port", 3001);
