const { Column } = require('../models')

async function createColumn(req, res) {
    const column = await Column(req.body);
    await column.save()
    res.status(201).json(column)
}



async function getColumns(req, res) {
    const { userId } = req.body;
    const columns = await Column.find({ userId });
    res.json(columns);
}

module.exports = { createColumn, getColumns }