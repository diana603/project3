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
        primaryBeneficiaryFName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        primaryBeneficiaryLName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        PrimaryPercentage: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        PAddressOne: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        PAddressTwo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        PCity: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        PZip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        secondaryBeneficiaryFName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        secondaryBeneficiaryLName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        SecondaryPercentage: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        SAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        SAddressTwo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        SCity: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        SZip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        SignatureOfOwner: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        SignatureOfAdditionalOwner: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        SignatureOfWitness: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },




    })
    return Beneficiary;
}
