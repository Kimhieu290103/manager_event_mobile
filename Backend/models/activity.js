'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Activity.hasMany(models.Finance, {foreignKey : "activity_id"})
      Activity.belongsTo(models.Candidate, {foreignKey : "candidate_id"})
      Activity.belongsTo(models.Event, {foreignKey : "event_id"})
    }
  }
  Activity.init({
    event_id: DataTypes.INTEGER,
    date_start: DataTypes.DATE,
    date_end: DataTypes.DATE,
    content: DataTypes.STRING,
    status: DataTypes.STRING,
    candidate_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};