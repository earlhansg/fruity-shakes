import { Router } from "express";

import * as api from "./receipt.api";

import * as verifyToken from '../verify-token/verify-token';

const router: Router = Router();

/**
 * Add new receipt
 */
router.post("/", verifyToken.authenticate, api.addReceipt);


export const receiptRoutes: Router = router;
