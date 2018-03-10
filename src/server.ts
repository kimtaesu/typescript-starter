import {App} from "./App";
import * as express from "express";

const port: number = Number(process.env.PORT) || 3000;
const app: express.Application = new App().app;


exports = app.listen(port, () => {
    console.log(("  App is running at http://localhost:%d in"), port);
    console.log("  Press CTRL-C to stop\n");
});
