'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faculity extends Model {
    static associate(models) {
      Faculity.hasMany(models.User, {foreignKey : "faculity_id"})
    }
  }
  Faculity.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Faculity',
  });
  return Faculity;
};