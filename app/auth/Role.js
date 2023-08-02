const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); // Импортируйте настройки подключения к базе данных

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

}, {
    timestamps: false, // Отключение автоматических полей createdAt и updatedAt
  });

module.exports = Role;