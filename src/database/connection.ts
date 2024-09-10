import { Sequelize } from "sequelize";

const sequelize = new Sequelize('resto_manager', 'resto_manager_owner', '1ykAVtcSip8Q', {
    host: "ep-plain-mode-a5m7eeso.us-east-2.aws.neon.tech",
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true, // Este es el ajuste clave para requerir SSL
          rejectUnauthorized: false // Esto se puede ajustar según la necesidad de verificar el certificado
        }
      }
})

export default sequelize