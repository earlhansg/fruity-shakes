import { Request, Response, NextFunction } from "express";
import { Shake } from "../../model/Shake";


/**
 * Fetches all shakes
 * @api {get} /shakes
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export function getShakes(req: Request, res: Response, next: NextFunction) {
  Shake.find({}, (err, shake) => {
    if(err) {
      res.send(err);
    }
    res.json(shake);
  })
}