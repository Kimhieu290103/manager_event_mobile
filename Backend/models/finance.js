'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Finance extends Model {
    static associate(models) {
      Finance.belongsTo(models.Activity, {foreignKey : "activity_id"})
      Finance.belongsTo(models.Event, {foreignKey : "event_id"})
    }
  }
  Finance.init({
    activity_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    money: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Finance',
  });
  return Finance;
};