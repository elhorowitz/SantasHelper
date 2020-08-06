'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FamilyMembers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
      familyId: {
        allowNull: false,
        references: {
          model: 'Families',
          key: 'id',
          as: 'familyId',
        },
        type: Sequelize.INTEGER,
      },
      memberId: {
        allowNull: false,
        references: {
          model: 'Members',
          key: 'id',
          as: 'memberId',
        },
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('FamilyMembers');
  },
};
