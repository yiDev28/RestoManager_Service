import { DataTypes, Model } from "sequelize";
import sequelize from "../../database/connection";
import CustomerModel from "../customer/customer.model";

class UserModel extends Model {
  public id!: string; // UUID es más adecuado como string en TypeScript
  public clientId!: string;
  public identityType!: number; // Ajusta el tipo si es necesario
  public identityNumber!: string;
  public firstName!: string;
  public lastName!: string;
  public username!: string;
  public password!: string;
  public email!: string;
  public phone!: string;
  public profile!: number;
  public isActive!: boolean;
}

// Definición del modelo
UserModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      field: "usr_id",
    },
    clientId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "usr_client_id",
    },
    identityType: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: "usr_identity_type",
    },
    identityNumber: {
      type: DataTypes.STRING(20),
      unique: false,
      allowNull: false,
      field: "usr_identity_number",
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "usr_first_name",
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "usr_last_name",
    },
    username: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
      field: "usr_username",
    },
    password: {
      type: DataTypes.STRING(150),
      allowNull: false,
      field: "usr_password",
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "usr_email",
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "usr_phone",
    },
    profile: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      field: "usr_profile",
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      field: "usr_is_active",
    },
  },
  {
    sequelize,
    tableName: "users", // Nombre de la tabla
    timestamps: true, // Desactivar timestamps automáticos
    indexes: [
      {
        unique: true,
        fields: ["usr_client_id", "usr_identity_number"], // Índice único compuesto
      },
      {
        unique: true,
        fields: ["usr_username"], // Índice en username
      },
    ],
  },
);

export default UserModel;
