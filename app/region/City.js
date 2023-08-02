const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); // Импортируйте настройки подключения к базе данных
const Country = require('./Country')

const City = sequelize.define('City', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

},{
    timestamps: false, // Отключение автоматических полей createdAt и updatedAt
  }
);

City.belongsTo(Country, { foreignKey: 'countryId' });

module.exports = City;