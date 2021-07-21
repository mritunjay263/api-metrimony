module.exports = (sequelize, Sequelize) => {
    const User_selfdescribe_details = sequelize.define("user_selfdescribe_details", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        about_user: {
            type: Sequelize.STRING,
            allowNull: true
        },
        disability: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });



    return User_selfdescribe_details;

}