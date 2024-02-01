'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      Question.belongsTo(models.Form, {foreignKey : "form_id"})
      Question.hasMany(models.Answer, {foreignKey : "question_id"})
    }
  }
  Question.init({
    form_id: DataTypes.INTEGER,
    question: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};