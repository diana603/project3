module.exports = function (sequelize, DataTypes) {
    const Ownership = sequelize.define("Ownership", {
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
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        addressTwo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        newOwnersFName: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        newOwnersLName: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        dateOfBirth: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        relationshipToInsured: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        newOwnersAddress: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        newOwnersAddressTwo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        newOwnersCity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        newOwnersZip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
    })
    return Ownership;

}