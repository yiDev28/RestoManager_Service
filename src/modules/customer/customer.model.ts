import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database/connection'; 

class CustomerModel extends Model {
  public id!: string; // UUID
  public name!: string; // Nombre o razón social
  public identificationType!: string; // Tipo de identificación
  public identificationNumber!: string; // Número de identificación
  public address!: string; // Dirección
  public city!: string; // Ciudad
  public department!: string; // Departamento
  public country!: string; // País
  public phone!: string; // Teléfono
  public secondPhone?: string; // Segundo teléfono (opcional)
  public email!: string; // Correo electrónico
  public secondEmail?: string; // Segundo correo electrónico (opcional)
  public legalRepresentativeId?: string; // Identificación del representante legal (opcional)
  public representativeName?: string; // Nombre del representante legal (opcional)
  public isActive!: boolean; // Estado de activación
}

// Definición del modelo
CustomerModel.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    field: 'cus_id'
  },
  name: {
    type: DataTypes.STRING(150),
    allowNull: false,
    field: 'cus_name'
  },
  representativeName: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'cus_rep_name'
  },
  identificationType: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    field: 'cus_id_type'
  },
  identificationNumber: {
    type: DataTypes.STRING(20),
    unique: true,
    allowNull: false,
    field: 'cus_id_num'
  }, 
  address: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'cus_address'
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'cus_city'
  },
  department: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'cus_dept'
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'cus_country'
  },
  phone: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'cus_phone'
  },
  secondPhone: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'cus_sec_phone'
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'cus_email'
  },
  secondEmail: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'cus_sec_email'
  },
  legalRepresentativeId: {
    type: DataTypes.STRING(20),
    allowNull: true,
    field: 'cus_leg_rep_id'
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'cus_active'
  },
}, {
  sequelize,
  tableName: 'customers', // Nombre de la tabla
  timestamps: true, // Activar timestamps automáticos
  indexes: [
    {
      unique: true,
      fields: ['cus_id_num', 'cus_id_type'], // Índice único compuesto
    }
  ]
});

export default CustomerModel;
