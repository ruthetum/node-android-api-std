const db = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('invite', {
      inviteIdx: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      mapIdx: {
        type: DataTypes.INTEGER,
        reference: {
          model: db.Map,
          key: 'mapIdx'
        }
      },
      userIdx: {
        type: DataTypes.INTEGER,
        reference: {
          model: db.User,
          key: 'userIdx'
        }
      },
    } ,{
      timestamps: false
    });
};