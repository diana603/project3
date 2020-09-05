module.exports = function (sequelize, DataTypes) {
    const Beneficiary = sequelize.define("Beneficiary", {
        policyNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
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
        street: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        aptNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        }


    })
    return Beneficiary;

}