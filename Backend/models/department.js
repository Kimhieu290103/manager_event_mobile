'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {
      Department.hasMany(models.Candidate, {foreignKey : "department_id"})
      Department.belongsTo(models.Event, {foreignKey : "event_id"})
    }
  }
  Department.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    event_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};