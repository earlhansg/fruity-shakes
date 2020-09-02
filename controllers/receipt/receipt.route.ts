import { Router } from "express";

import * as api from "./receipt.api";

const router: Router = Router();

/**
 * Add new receipt
 */
router.post("/", api.addReceipt);


export const receiptRoutes: Router = router;
