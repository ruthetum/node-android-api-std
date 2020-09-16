module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
      userID: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      userPW: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userAge: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    } ,{
      timestamps: false
    });
};