'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: Sequelize.STRING,
      content: Sequelize.STRING,
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        field: 'user_id',
      },
      published: {
        field: 'published',
        allowNull: false,
        type: Sequelize.DATE
      },
      updated: {
        field: 'updated',
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
