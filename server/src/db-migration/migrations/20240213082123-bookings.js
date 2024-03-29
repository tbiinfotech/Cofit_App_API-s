"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("book_events", {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          userId: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          eventId: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          planId: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          amount: {
            type: Sequelize.FLOAT,
            allowNull: false
          },
          firstName: {
            type: Sequelize.STRING,
            allowNull: false
          },
          lastName: {
            type: Sequelize.STRING,
            allowNull: false
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false
          },
          phoneNumber: {
            type: Sequelize.STRING,
            allowNull: false
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
        await queryInterface.dropTable("book_events");
    },
};