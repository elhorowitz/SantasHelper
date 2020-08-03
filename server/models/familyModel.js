'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('./../index');

module.exports = sequelize.define(
  'Family',
  {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
  },
  {}
);
