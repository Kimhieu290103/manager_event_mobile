'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Notification.belongsTo(models.Event, {foreignKey : "event_id"})
      Notification.hasMany(models.NotificationDetail, {foreignKey : "noti_id"})
    }
  }
  Notification.init({
    event_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    dateTime : DataTypes.DATE,
    isRead : DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    category : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};