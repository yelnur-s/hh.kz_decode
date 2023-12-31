'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Education', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      level: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      university_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      faculty: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      major: {
        allowNull: false,
        type: Sequelize.STRING, // Corrected from Sequelize.STRING to Sequelize.DATE
      },
      end_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      resumeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Resumes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Education');
  },
};