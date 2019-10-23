"use strict";

const env = process.env.NODE_ENV || "development";

const environment = {
  production: {
    username: "root",
    password: "password",
    database: "sequelize",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  development: {
    username: "root",
    password: "password",
    database: "sequelize",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  }
};

module.exports = environment[env];
