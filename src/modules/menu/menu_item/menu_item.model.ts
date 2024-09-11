import { DataTypes, Model } from 'sequelize';
import sequelize from '../../../database/connection'; // Asegúrate de importar la conexión a tu base de datos

class MenuItemModel extends Model {
  public id!: number;
  public menuId!: string;
  public plateId?: string;   // Opcional: id del plato (puede ser null si es bebida)
  public ingredientId?: string; // Opcional: id del ingrediente (si aplica)
  public quantity!: number;  // Cantidad de cada ítem
}

// Definición del modelo
MenuItemModel.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    field: 'menu_detail_id',
  },
  menuId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'menu_id',
  },
  plateId: {
    type: DataTypes.UUID,
    allowNull: true,
    field: 'plate_id',
  },
  ingredientId: {
    type: DataTypes.UUID,
    allowNull: true,
    field: 'ingredient_id',
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'menu_detail_quantity',
  },
}, {
  sequelize,
  tableName: 'menu_detail',
  timestamps: false,  // No necesita timestamps para detalles
  indexes: [
    {
      fields: ['menu_id', 'plate_id', 'ingredient_id'],
    },
  ],
});

export default MenuItemModel;
