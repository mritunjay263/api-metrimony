const http = require('http')
const app = require('./app')
const port = process.env.PORT || 3000;
const server = http.createServer(app);

//initialised database here
const db = require('./src/models/index.db');//setting the synconise data 

db.sequelize.sync();
/*
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});
/*
db.teacher_profile.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.teacher_profile");
});*/

app.listen(3000, () => {
    console.log(`server is running on port ${port}`)
})