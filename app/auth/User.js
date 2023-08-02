const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); // Импортируйте настройки подключения к базе данных
const Role = require('./Role')
const Company = require('./Company')

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
    timestamps: false, // Отключение автоматических полей createdAt и updatedAt
  });

User.belongsTo(Role, { foreignKey: 'roleId' });
User.belongsTo(Company, { foreignKey: 'companyId' });

module.exports = User;