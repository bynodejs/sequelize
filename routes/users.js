"use strict";

// require modules
const router = require("express").Router();

// require models
const { User } = require("../lib/sequelize");

/**
 * @url BASE_URL/users/
 * @type GET
 * @description 사용자 조회
 */
router.get("/", (req, res, next) => {
  User.findAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      next(err);
    });
});

/**
 * @url BASE_URL/users/
 * @type POST
 * @description 사용자 등록
 */
router.post("/", (req, res, next) => {
  const data = req.body;

  User.create(data)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
