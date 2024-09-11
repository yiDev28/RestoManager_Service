import { Router } from "express";
import { validateKey } from "../../services/Validate";
import { loginUser } from "./auth.controller";

const router = Router();

router.post('/login',validateKey,loginUser)

export default router