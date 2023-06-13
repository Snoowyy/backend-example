/* PACKAGE REQUIRE */ 
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
/* DB CONFIGURATION */ 
const sequelize_connection = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  define: {
    timestamps: false
    }
});
/* GENERATE EMPTY OBJ */
const db = {};
/* GENERATE EMPTY OBJ */
db.Sequelize = Sequelize; // ADD PACKAGE TO THE OBJ
db.sequelize = sequelize_connection; // ADD CONNECTION TO THE OBJ
db.clients = require("./client.model.js")(sequelize_connection, Sequelize); // SEND CONNECTION AND SEQUELIZE TO THE MODEL

module.exports = db;