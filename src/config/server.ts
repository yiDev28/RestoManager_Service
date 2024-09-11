import express, { Request, Response } from "express";
import routerUsers from "../modules/user/user.router";
import routerProducts from "../modules/product/product.router";
import routerAuth from "../modules/auth/auth.router";
import cors from "cors";
import models from ".";
import { getErrorMessage } from "../helpers/errorHandler";

class Server {
    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "3000";
        this.listen();
        this.middlewares();
        this.routes();
        this.dbconect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("corriendo puerto " + this.port);
        });
    }
    routes() {
        this.app.use("/api/products", routerProducts);
        this.app.use("/api/users", routerUsers);
        this.app.use("/api/auth", routerAuth);

        // Manejo de rutas no encontradas (404)
        this.app.use((req: Request, res: Response) => {
            res.status(404).json({
                code: 40410,
                message: getErrorMessage(40410),
            });
        });
    }
    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }
    // Método para conectar a la base de datos y sincronizar modelos
    async dbconect() {
        try {
            for (const model of models) {
                await model.sync();
            }
            console.log("Conectado a la base de datos y modelos sincronizados");
        } catch (error) {
            console.error("Error conectando a la base de datos: " + error);
        }
    }
}

export default Server;
