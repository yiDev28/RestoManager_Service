import { Response, Router,Request } from "express";
import { validateKey } from "../../services/Validate";
import { createUser } from "./user.controller";

const router = Router();

router.post("/create/admin", validateKey, createUser);

export default router;
