'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScheduleDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ScheduleDetail.belongsTo(models.Schedule, {foreignKey : 'schedule_id'})
      ScheduleDetail.belongsTo(models.Candidate, {foreignKey : 'candidate_id'})
    }
  }
  ScheduleDetail.init({
    candidate_id: DataTypes.INTEGER,
    schedule_id: DataTypes.INTEGER,
    isConfirmed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ScheduleDetail',
  });
  return ScheduleDetail;
};