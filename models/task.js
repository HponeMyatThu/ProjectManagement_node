"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.Story, {
        foreignKey: "storyId",
        as: "story",
      });
      Task.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  Task.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      dueDate: DataTypes.DATE,
      status: DataTypes.STRING,
      assignee: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Task",
    }
  );
  return Task;
};
