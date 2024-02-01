'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TypeEvent.hasMany(models.Event, {foreignKey : 'type_id'})
    }
  }
  TypeEvent.init({
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'TypeEvent',
  });
  return TypeEvent;
};