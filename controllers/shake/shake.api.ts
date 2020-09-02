import { Request, Response, NextFunction } from "express";
import { User } from "../../model/User";


/**
 * Fetches all shakes
 * @api {get} /shakes
 *
 * @apiParam {Uuid} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export function getShakes(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Get Users");
}