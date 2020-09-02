import { Request, Response, NextFunction } from "express";
import { Snack } from "../../model/Snack";

/**
 * Fetches all snacks
 * @api {get} /snacks
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export function getSnacks(req: Request, res: Response, next: NextFunction) {
    Snack.find({}, (err, snack) => {
        if(err) {
          res.send(err);
        }
        res.json(snack);
    })
}