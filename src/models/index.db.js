const dbConfig = require('../../app.config/db.config');

const { Sequelize, Op, QueryTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//models register
db.user = require('./user.model')(sequelize, Sequelize);
db.User_profile_details = require('./user_profile_details.model')(sequelize, Sequelize);
db.User_education_details = require('./user_educationdetails.model')(sequelize, Sequelize);
db.User_lifestyle_details = require('./user_lifestyle_details.model')(sequelize, Sequelize);
db.User_selfdescribe_details = require('./user_selfdescribe_details.model')(sequelize, Sequelize);



//user_profile_details
db.User_profile_details.belongsTo(db.user, {
    foreignKey: "userId",
    as: "user",
});
//user_eduction_details
db.User_education_details.belongsTo(db.user, {
    foreignKey: "userId",
    as: "user",
});
//user_eduction_details
db.User_lifestyle_details.belongsTo(db.user, {
    foreignKey: "userId",
    as: "user",
});
//user_eduction_details
db.User_selfdescribe_details.belongsTo(db.user, {
    foreignKey: "userId",
    as: "user",
});


/*
db.User_cast_details = require('./user_castedetails.model')(sequelize, Sequelize);
db.User_personal_details = require('./user_profile_details.model')(sequelize, Sequelize);
db.User_professional_details = require('./user.professionaldetails.model')(sequelize, Sequelize);
*/
/*
//user_basic_details
db.User_cast_details.belongsTo(db.user, {
    foreignKey: "userId",
    as: "user",
});
//user_personal_details
db.User_personal_details.belongsTo(db.user, {
    foreignKey: "userId",
    as: "user",
});
//User_professional_details
db.User_professional_details.belongsTo(db.user, {
    foreignKey: "userId",
    as: "user",
});
/*
//db.user.hasMany
db.user.hasMany(db.note, { as: 'notes' });
db.note.belongsTo(db.user, {
    foreignKey: "userId",
    as: "user",
});
//db.user.hasMany
db.user.hasOne(db.teacher_profile, { as: 'teacher_profile' });
db.teacher_profile.belongsTo(db.user, {
    foreignKey: "userId",
    as: "teacher"
});
*/

module.exports = db;