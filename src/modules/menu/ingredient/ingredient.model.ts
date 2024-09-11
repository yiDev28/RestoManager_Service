import { DataTypes, Model } from 'sequelize';
import sequelize from '../../../database/connection';

class IngredientModel extends Model {
  public id!: number;
  public name!: string;
  public quantity!: number;
}

IngredientModel.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    field: 'ing_id'
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'ing_name'
  },
  quantity: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'ing_quantity'
  },
}, {
  sequelize,
  tableName: 'ingredients',
  timestamps: true,
});

export default IngredientModel;
