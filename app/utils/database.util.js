const { Sequelize, DataTypes } = require('sequelize');


// Establish db connection
const sequelize = new Sequelize({
	dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: 'davc0012',
	port: 5432,
	database: 'RegistrationDB',
	logging: false,
});

//const sequelize = new Sequelize('postgres://postgres:davc0012@localhost:5432/RegistrationDB') // Example for postgres

module.exports = { sequelize, DataTypes };