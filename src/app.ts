import express, { NextFunction, Response, Request } from "express";
import "express-async-errors";
import { routes } from "./routes/routes";

import "dotenv/config";

import { middlewareError } from "./middlewares/Error/Error";

const app = express();

app.use(express.json());

app.use(routes);

app.use(middlewareError);

export { app };
