"use strict";

// require modules
const router = require("express").Router();

// require models
const { User, Comment } = require("../lib/sequelize");

/**
 * @url BASE_URL/comments/{id}/
 * @type GET
 * @description 댓글 조회
 */
router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  Comment.findAll({
    include: {
      model: User,
      where: { id: id }
    }
  })
    .then(comments => {
      res.status(200).json(comments);
    })
    .catch(err => {
      next(err);
    });
});

/**
 * @url BASE_URL/comments/
 * @type POST
 * @description 댓글 등록
 */
router.post("/", (req, res, next) => {
  const { id, comment } = req.body;

  Comment.create({
    commenter: id,
    comment: comment
  })
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      next(err);
    });
});

/**
 * @url BASE_URL/comments/{id}/
 * @type PUT
 * @description 댓글 수정
 */
router.put("/:id", (req, res, next) => {
  const { id } = req.params,
    data = req.body;

  Comment.update(data, { where: { id: id } })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      next(err);
    });
});

/**
 * @url BASE_URL/comments/{id}/
 * @type DELETE
 * @description 댓글 삭제
 */
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  Comment.destroy({ where: { id: id } })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
