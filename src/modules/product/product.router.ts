import { Router } from "express";
import { getProducts } from "./product.controller";
import { validateToken } from "../../services/Validate";

const router = Router();
router.get("/", validateToken, getProducts);

export default router;
