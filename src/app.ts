import * as express from "express";
import * as homeController from "./controllers/home";
import * as dotenv from "dotenv";
import * as logger from "morgan";

dotenv.config({path: ".env.example"});

const app = express();

// morgan logger
app.use(logger("dev"));

app.get("/", homeController.index);

export default app;