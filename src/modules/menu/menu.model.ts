import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database/connection'; // Asegúrate de importar la conexión a tu base de datos

class MenuModel extends Model {
  public id!: number;
  public clientId!: string;
  public menuType!: string;  // 'Menú de helados', 'Menú de bebidas', etc.
  public isActive!: boolean;
}

// Definición del modelo
MenuModel.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    field: 'menu_id',
  },
  clientId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'menu_client_id',
  },
  pu_id:{
    type: DataTypes.UUID,
      allowNull: false,
      field: 'menu_pu_id',
  },
  menuType: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'menu_type',
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'menu_is_active',
  },
}, {
  sequelize,
  tableName: 'menu',
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ['menu_pu_id', 'menu_client_id'],
    },
  ],
});

export default MenuModel;
