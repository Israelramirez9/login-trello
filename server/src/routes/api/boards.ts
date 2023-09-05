const express = require('express')
const router = express.Router()
const { createBoard, getBoards, updateBoard, deleteBoard, getBoard } = require('../../controllers/board.controller')
const { checkAuth } = require('../../middlewares/auth.middleware')

router.post("/", checkAuth, createBoard);
router.get("/", checkAuth, getBoards);
router.put("/:boardId", checkAuth, updateBoard);
router.delete("/:boardId", checkAuth, deleteBoard);
router.get("/:boardId", checkAuth, getBoard)
module.exports = router