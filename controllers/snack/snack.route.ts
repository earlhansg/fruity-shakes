import { Router } from "express";

import * as api from "./snack.api";

const router: Router = Router();

/**
 * Adds new snacks
 */
router.get("/", api.getSnacks);


export const snackRoutes: Router = router;
