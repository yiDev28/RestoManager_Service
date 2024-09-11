import { DataTypes, Model } from "sequelize";
import sequelize from "../../../database/connection";

class FoodItemModel extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
}

FoodItemModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      field: "pl_id",
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "pl_name",
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: "pl_desc",
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      field: "pl_price",
    },
  },
  {
    sequelize,
    tableName: "food_items",
    timestamps: true,
  },
);

export default FoodItemModel;
