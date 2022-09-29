'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mtdz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mtdz.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    trait_type_1: DataTypes.STRING,
    value_1: DataTypes.STRING,
    trait_type_2: DataTypes.STRING,
    value_2: DataTypes.STRING,
    trait_type_3: DataTypes.STRING,
    value_3: DataTypes.STRING,
    trait_type_4: DataTypes.STRING,
    value_4: DataTypes.STRING,
    trait_type_5: DataTypes.STRING,
    value_5: DataTypes.STRING,
    trait_type_6: DataTypes.STRING,
    value_6: DataTypes.STRING,
    trait_type_7: DataTypes.STRING,
    value_7: DataTypes.STRING,
    trait_type_8: DataTypes.STRING,
    value_8: DataTypes.STRING,
    trait_type_9: DataTypes.STRING,
    value_9: DataTypes.STRING,
    trait_type_10: DataTypes.STRING,
    value_10: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mtdz',
  });
  return mtdz;
};