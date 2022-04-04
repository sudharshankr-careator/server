const Sequelize = require("sequelize");
const db = new Sequelize("server", "root", "root123", {
	port: 3306,
	host: "localhost",
	dialect: "mysql",
});

module.exports = db;
