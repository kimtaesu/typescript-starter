import * as express from "express";
import * as homeController from "./controllers/home";

const app = express();

app.get("/", homeController.index);

export default app;