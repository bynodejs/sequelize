"use strict";

// require modules
const router = require("express").Router();

// require models
const { User } = require("../lib/sequelize");

/**
 * @url BASE_URL/
 * @type GET
 * @description 페이지 호출
 */
router.get("/", (req, res, next) => {
  User.findAll()
    .then(users => {
      res.render("index", { users });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
