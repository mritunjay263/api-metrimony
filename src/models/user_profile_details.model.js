module.exports = (sequelize, Sequelize) => {
    const User_profile_details = sequelize.define("user_profile_details", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        district: {
            type: Sequelize.STRING,
            allowNull: false
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false
        },
        maritalStatus: {
            type: Sequelize.STRING,
            allowNull: false
        },
        community: {
            type: Sequelize.STRING,
            allowNull: false
        },
        sub_community: {
            type: Sequelize.STRING,
            allowNull: true
        },
    });



    return User_profile_details;


}