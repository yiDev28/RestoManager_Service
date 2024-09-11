import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database/connection';

class FoodIngredientsModel extends Model {
  public foodId!: string;
  public ingredientId!: string;
  public quantity!: number;
}

FoodIngredientsModel.init({
    foodId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'fi_id'
  },
  ingredientId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'fi_ingred_id'
  },
  quantity: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'fi_ing_qty'
  },
}, {
  sequelize,
  tableName: 'food_ingredients',
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['fi_id', 'fi_ingred_id'],
    },
  ],
});

export default FoodIngredientsModel;
