'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mtdzs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      trait_type_1: {
        type: Sequelize.STRING
      },
      value_1: {
        type: Sequelize.STRING
      },
      trait_type_2: {
        type: Sequelize.STRING
      },
      value_2: {
        type: Sequelize.STRING
      },
      trait_type_3: {
        type: Sequelize.STRING
      },
      value_3: {
        type: Sequelize.STRING
      },
      trait_type_4: {
        type: Sequelize.STRING
      },
      value_4: {
        type: Sequelize.STRING
      },
      trait_type_5: {
        type: Sequelize.STRING
      },
      value_5: {
        type: Sequelize.STRING
      },
      trait_type_6: {
        type: Sequelize.STRING
      },
      value_6: {
        type: Sequelize.STRING
      },
      trait_type_7: {
        type: Sequelize.STRING
      },
      value_7: {
        type: Sequelize.STRING
      },
      trait_type_8: {
        type: Sequelize.STRING
      },
      value_8: {
        type: Sequelize.STRING
      },
      trait_type_9: {
        type: Sequelize.STRING
      },
      value_9: {
        type: Sequelize.STRING
      },
      trait_type_10: {
        type: Sequelize.STRING
      },
      value_10: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mtdzs');
  }
};