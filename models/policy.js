const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {

    policyNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    beneficiaries: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
  });

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
