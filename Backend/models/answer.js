'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      Answer.belongsTo(models.Question, {foreignKey : "question_id"})
      Answer.belongsTo(models.User, {foreignKey : "user_id"})
    }
  }
  Answer.init({
    question_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    answer: DataTypes.STRING,
    isDeleted : DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};