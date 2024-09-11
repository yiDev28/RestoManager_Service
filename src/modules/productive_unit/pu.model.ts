import { DataTypes, Model } from "sequelize";
import sequelize from "../../database/connection";

class ProductiveUnitModel extends Model {
  public id!: string;
  public clientId!: string;
  public idType!: string;
  public idNumber!: string;
  public name!: string;
  public address!: string;
  public city!: string;
  public country!: string;
  public email!: string;
  public phone!: string;
  public legalRepName?: string; // Opcional en caso de persona jurídica
}

ProductiveUnitModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      field: "pu_id",
    },
    clientId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "pu_client_id",
    },
    idType: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: "pu_id_type",
    },
    idNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: "pu_id_number",
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "pu_name",
    },
    address: {
      type: DataTypes.STRING(150),
      allowNull: false,
      field: "pu_address",
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "pu_city",
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "pu_country",
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "pu_email",
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "pu_phone",
    },
    legalRepName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: "pu_legal_rep_name",
    },
  },
  {
    sequelize,
    tableName: "productives_units", // Nombre de la tabla
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["pu_client_id", "pu_id_type", "pu_id_number"], // Índice único basado en cliente, tipo y número de identificación
      },
    ],
  },
);

export default ProductiveUnitModel;
