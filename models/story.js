"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Story.belongsTo(models.Project, {
        foreignKey: "projectId",
        as: "project",
      });
      Story.hasMany(models.Task, {
        foreignKey: "storyId",
        as: "tasks",
      });
    }
  }
  Story.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      priority: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Story",
    }
  );
  return Story;
};
