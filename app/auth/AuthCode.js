const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); // Импортируйте настройки подключения к базе данных

const AuthCode = sequelize.define('AuthCode', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valid_till: {
    type: DataTypes.DATE,
    allowNull: false,
  },
},{
    timestamps: false, // Отключение автоматических полей createdAt и updatedAt
  }
);

module.exports = AuthCode;