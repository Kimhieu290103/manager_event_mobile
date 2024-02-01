'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationDetail extends Model {
    static associate(models) {
      NotificationDetail.belongsTo(models.Notification, {foreignKey : 'noti_id'})
      NotificationDetail.belongsTo(models.User, {foreignKey : "user_id"})
    }
  }
  NotificationDetail.init({
    noti_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NotificationDetail',
  });
  return NotificationDetail;
};