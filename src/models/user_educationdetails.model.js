module.exports = (sequelize, Sequelize) => {
    const User_education_details = sequelize.define("user_education_details", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        education_degree: {
            type: Sequelize.STRING,
            allowNull: false
        },
        education_field: {
            type: Sequelize.STRING,
            allowNull: false
        },
        college_name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        type_of_work: {
            type: Sequelize.STRING,
            allowNull: true
        },
        position_of_work: {
            type: Sequelize.STRING,
            allowNull: true
        },

    });



    return User_education_details;


}