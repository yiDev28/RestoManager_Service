import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { getErrorMessage } from "../helpers/errorHandler";

export const validateToken = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const headerToken = req.headers["authorization"];

    if (headerToken != undefined && headerToken.startsWith("Bearer ")) {
        try {
            const Token = headerToken.slice(7);
            const tokenValid = jwt.verify(Token, process.env.SECRET_KEY || "");

            next();
        } catch (error) {
            return res.status(401).json({
                msg: "",
            });
        }
    } else {
        return res.status(401).json({
            msg: `No envio token`,
        });
    }
};

export const validateKey = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const headerKey = req.headers["x-api-key-token"];
    if (headerKey != undefined) {
        if (headerKey != process.env.API_KEY_TOKEN_ADMIN) {
            return res.status(401).json({
                code: 40110,
                msg: getErrorMessage(40110),
            });
        }
    } else {
        return res.status(401).json({
            code: 40111,
            msg: getErrorMessage(40111),
        });
    }
    next();
};
