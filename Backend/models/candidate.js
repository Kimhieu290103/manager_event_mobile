'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    static associate(models) {
      Candidate.hasMany(models.Activity, {foreignKey : "candidate_id"})
      Candidate.hasMany(models.ScheduleDetail, {foreignKey : "candidate_id"})
      Candidate.belongsTo(models.User, {foreignKey : "user_id"})
      Candidate.belongsTo(models.Department, {foreignKey : "department_id"})
    }
  }
  Candidate.init({
    department_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};