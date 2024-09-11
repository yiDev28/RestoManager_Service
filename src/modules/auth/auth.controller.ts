import { Request, Response } from "express";
import UserModel from "../user/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (req: Request, res: Response) => {
    
    const { username, password } = req.body;

    //validamos si el usuaro existe en la base de datos

    const user: any = await UserModel.findOne({
        where: { username: username },
    });

    if (!user) {
        return res.status(401).json({
            msg: `usuario ${username} no existe`,
        });
    }

    //validamos password

    const passwordValid = await bcrypt.compare(password, user.password);
    console.log(passwordValid);

    if (!passwordValid) {
        return res.status(401).json({
            msg: `clave de usuario ${username} incorrecta`,
        });
    }
    //generamos un token para el usuario

    const token = jwt.sign(
        {
            username: username,
        },
        process.env.SECRET_KEY || "HOLdfgdfgdfgdfgfgdfgdfgA",
        {
            expiresIn: "10000",
        },
    );

    return res.status(200).json({
        msg: "INGRESO CORRECTO",
        token: token,
    });
};