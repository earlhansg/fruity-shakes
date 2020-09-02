import { Request, Response, NextFunction } from "express";


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
export function getSnacks(req: Request, res: Response, next: NextFunction) {}