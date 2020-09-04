import { Router } from "express";

import * as api from "./shake.api";

import * as verifyToken from '../verify-token/verify-token';

const router: Router = Router();

/**
 * Adds new shakes
 */
router.get("/", verifyToken.authenticate, api.getShakes);


export const shakeRoutes: Router = router;
