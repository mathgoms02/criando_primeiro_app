'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tracking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Setando o relacionamento aqui também
      Tracking.belongsTo(models.User);
      Tracking.hasMany(models.Product);
    }
  }
  Tracking.init({
    code: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tracking',
  });
  return Tracking;
};