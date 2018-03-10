import * as express from "express";
import * as homeController from "./controllers/home";
import * as mongoose from "mongoose";

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

    public connectMongo() {
        // CONNECT TO MONGODB SERVER
        const db = mongoose.connection;
        db.on("error", console.error);
        db.once("open", function () {
            // CONNECTED TO MONGODB SERVER
            console.log("Connected to mongod server");
        });

        mongoose.connect("mongodb://localhost:27017/starter");
    }

    constructor() {
        this.app = express();
        this.app.get("/", homeController.index);
        this.connectMongo();
    }
}

export {App};