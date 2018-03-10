import * as express from "express";
import * as homeController from "./controllers/home";

class App {
    public app: express.Application;

    /**
     * @ class App
     * @ method bootstrap
     * @ static
     *
     */
    public static bootstrap(): App {
        return new App();
    }

    constructor() {
        this.app = express();
        this.app.get("/", homeController.index);
    }
}

export {App};