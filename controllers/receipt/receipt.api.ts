import { Request, Response, NextFunction } from "express";
import { Receipt } from '../../model/Receipt';

/**
 * Fetches all receipt
 * @api {post} /receipt
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export function addReceipt(req: Request, res: Response, next: NextFunction) {
    const newReceipt = new Receipt(req.body);

    newReceipt.save((err, receipt) => {
        if(err){
            res.send(err);
        }
        res.json(receipt);
    });
}