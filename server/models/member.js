'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Member.belongsToMany(models.Family, {
        through: 'FamilyMembers',
      });

      Member.hasMany(models.Present);
    }
  }
  Member.init(
    {
      name: DataTypes.STRING,
      type: { type: DataTypes.ENUM('user', 'admin'), defaultValue: 'user' },
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Member',
    }
  );
  return Member;
};
