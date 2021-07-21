module.exports = (sequelize, Sequelize) => {
    const User_lifestyle_details = sequelize.define("user_lifestyle_details", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        diet: {
            type: Sequelize.STRING,
            allowNull: true
        },
        smoke_habbit: {
            type: Sequelize.STRING,
            allowNull: false
        },
        drink_habbit: {
            type: Sequelize.STRING,
            allowNull: false
        },
        height: {
            type: Sequelize.STRING,
            allowNull: false
        },
        body_type: {
            type: Sequelize.STRING,
            allowNull: true
        },
        skin_tone: {
            type: Sequelize.STRING,
            allowNull: true
        },
        mobile_number: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });



    return User_lifestyle_details;

}