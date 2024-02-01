'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Faculity, {foreignKey: 'faculity_id'})
      User.hasMany(models.NotificationDetail, {foreignKey : 'user_id'})
      User.hasMany(models.Answer, {foreignKey : 'user_id'})
      User.hasMany(models.Candidate, {foreignKey : 'user_id'})
      User.hasMany(models.Event, {foreignKey : "createdBy"})
    }
  }
  User.init({
    name: DataTypes.STRING,
    gmail: DataTypes.STRING,
    password: DataTypes.STRING,
    telephone: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    avatar: DataTypes.STRING,
    birthday: DataTypes.DATE,
    faculity_id: DataTypes.INTEGER,
    university: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};