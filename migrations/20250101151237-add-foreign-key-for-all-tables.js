"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    // Add the userId column to the Tasks table
    await queryInterface.addColumn("Tasks", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    // Add the storyId column to the Tasks table
    await queryInterface.addColumn("Tasks", "storyId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Stories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    
    // Remove the userId column from the Tasks table
    await queryInterface.removeColumn('Tasks', 'userId');

    // Remove the storyId column from the Tasks table
    await queryInterface.removeColumn('Tasks', 'storyId');
  },
};
