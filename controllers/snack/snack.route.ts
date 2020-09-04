import { Router } from "express";

import * as api from "./snack.api";
import * as verifyToken from '../verify-token/verify-token';


const router: Router = Router();

/**
 * Adds new snacks
 */
router.get("/", verifyToken.authenticate, api.getSnacks);


export const snackRoutes: Router = router;
