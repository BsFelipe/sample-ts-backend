import { Router } from "express";
import register from "./register.controller";
import { asyncHandler } from "../../utils/asyncHandler";

const router = Router();

router.post('/register', asyncHandler(register.create));

export default router;
