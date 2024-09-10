import { Router } from "express";
import validateToken from "./validate-token";
import { getProducts } from "../controllers/product";

const router = Router()
router.get('/',validateToken,getProducts)


export default router