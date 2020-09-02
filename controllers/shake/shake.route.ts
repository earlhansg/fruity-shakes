import { Router } from "express";

import * as api from "./shake.api";

const router: Router = Router();

/**
 * Adds new shakes
 */
router.post("/", api.getShakes);


export const shakeRoutes: Router = router;
