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
        primaryBeneficiaryFirstName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        primaryBeneficiaryLastName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        percentageOfProceeds: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            unique: false,
        },
        primaryBeneficiaryFirstNameT: {
            type: DataTypes.STRING, 
            allowNull: false,
            unique: false,
        }, 
        primaryBeneficiaryLastNameT: {
            type: DataTypes.STRING, 
            allowNull: false, 
            unique: false, 
        }, 
        percentageOfProceedsT: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            unique: false,
        }, 
        addressT: {
            type: DataTypes.STRING, 
            allowNull: false, 
            unique: false, 
        }, 
        



    })
    return Beneficiary;

}