'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.hasMany(models.Department, {foreignKey : "event_id"})
      Event.hasMany(models.Finance, {foreignKey : "event_id"})
      Event.hasMany(models.Form, {foreignKey : "event_id"})
      Event.hasMany(models.Schedule, {foreignKey : "event_id"})
      Event.hasMany(models.Notification , {foreignKey : "event_id"})
      Event.hasMany(models.Activity , {foreignKey : "event_id"})
      Event.belongsTo(models.User,{foreignKey : "createdBy"})
      Event.belongsTo(models.TypeEvent,{foreignKey : "type_id"})
    }
  }
  Event.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    slogan: DataTypes.STRING,
    date_start: DataTypes.DATE,
    date_end: DataTypes.DATE,
    location: DataTypes.STRING,
    image: DataTypes.STRING,
    status: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    type_id : DataTypes.INTEGER,
    isDeleted : DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};