import {NextFunction, Request, Response} from "express";
import {default as Book} from "../model/book";
import {WriteError} from "mongodb";

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response, next: NextFunction) => {
    const book = new Book({
        name: "NodeJS Tutorial",
        author: "velopert"
    });
    book.save((err: WriteError) => {
        if (err) {
            console.log(`error ${err}`);
        }
        console.log(`saved ${err}`);
    });
    res.send("Hellow");
};
