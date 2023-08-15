const express = require('express')
const router = express.Router()
const { createColumn, getColumns, updateColumn, deleteColumn } = require('../../controllers/column.controller')
const { checkAuth } = require('../../middlewares/auth.middleware')

router.post("/", checkAuth, createColumn);
router.get("/", checkAuth, getColumns);
router.put("/:columnId", checkAuth, updateColumn);
router.delete("/:columnId", checkAuth, deleteColumn);
module.exports = router