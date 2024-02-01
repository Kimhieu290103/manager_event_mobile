const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const db = {};
require("dotenv").config();

// Database trên console clever-cloud (https://console.clever-cloud.com/)

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DIALECT ,
    operatorsAliases: false,
    connectionString: process.env.MYSQL_URL + "?sslmode=require",
    pool: {
        max: parseInt(process.env.POOL_MAX),
        min: parseInt(process.env.POOL_MIN),
        acquire: parseInt(process.env.POOL_ACQUIRE),
        idle: parseInt(process.env.POOL_IDLE),
    },
});

// Database trên local

// const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD,
//     {
//         host: process.env.MYSQL_HOST,
//         dialect: process.env.MYSQL_DIALECT,
//         operatorsAliases: false,

//         pool: {
//             max: parseInt(process.env.POOL_MAX),
//             min: parseInt(process.env.POOL_MIN),
//             acquire: parseInt(process.env.POOL_ACQUIRE),
//             idle: parseInt(process.env.POOL_IDLE),
//         },
//     }
// );

fs.readdirSync(__dirname)
    .filter((file) => {
        return (
            file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".js"
        );
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(
            sequelize,
            Sequelize.DataTypes
        );
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;