"use strict";

// require modules
const Sequelize = require("sequelize");

// require config
const config = require("../config/config.js");

let db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("../models/user.model")(sequelize, Sequelize);
db.Comment = require("../models/comment.model")(sequelize, Sequelize);

db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" });
db.Comment.belongsTo(db.User, { foreignKey: "commenter", targetKey: "id" });

module.exports = db;
