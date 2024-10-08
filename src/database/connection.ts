import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE || "",
  process.env.USERDB || "",
  process.env.PASSDB || "",
  {
    host: process.env.HOST || "",
    dialect: "postgres",
    logging: (msg: string) => {
      if (msg.includes("Error")) {
        console.error(msg); // Solo imprime errores
      }
    },
    dialectOptions: {
      ssl: {
        require: true, // Este es el ajuste clave para requerir SSL
        rejectUnauthorized: false, // Esto se puede ajustar según la necesidad de verificar el certificado
      },
    },
  },
);

export default sequelize;
