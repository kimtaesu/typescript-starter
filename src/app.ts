import * as express from "express";
import * as homeController from "./controllers/home";
import * as dotenv from "dotenv";

dotenv.config({path: ".env.example"});

const app = express();

app.get("/", homeController.index);

export default app;