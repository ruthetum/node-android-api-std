const db = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment', {
      commentIdx: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      placeIdx: {
        type: DataTypes.INTEGER,
        reference: {
          model: db.Place,
          key: 'placeIdx'
        }
      },
      userIdx: {
        type: DataTypes.INTEGER,
        reference: {
          model: db.User,
          key: 'userIdx'
        }
      },
      rate: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: true
      },
      writtenDay: {
        type: DataTypes.DATE,
        allowNull: true
      }
    } ,{
      timestamps: false
    });
};