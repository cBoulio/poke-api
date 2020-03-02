'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    dark: DataTypes.BOOLEAN,
    halo: DataTypes.BOOLEAN
  }, {});
  Pokemon.associate = function(models) {
    // associations can be defined here
  };
  return Pokemon;
};