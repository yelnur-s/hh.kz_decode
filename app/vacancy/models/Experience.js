const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db'); // Импортируйте настройки подключения к базе данных

const Experience = sequelize.define('Experience', {
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
    timestamps: false, // Отключение автоматических полей createdAt и updatedAt
  }
);

module.exports = Experience;