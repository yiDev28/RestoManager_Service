import { Request, Response } from "express"
import { Product } from "./product.model";


export const getProducts = async (req: Request, res: Response) => {

const listProducts = await Product.findAll();


res.json({
    msg:"Prodcutossss",
    listProducts
})

}