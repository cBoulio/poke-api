'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    role_id: DataTypes.INTEGER,
    role: DataTypes.STRING
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
  };
  return Roles;
};