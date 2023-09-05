const { Column } = require('../models')


async function createColumn(req, res) {
    const userId = req.user._id

    try {
        const column = await Column(req.body);
        column.userId = userId;
        column.columnId = column._id;
        await column.save();
        column.userId = undefined;
        res.status(201).json(column);
    } catch (e) {
        console.log(e)
        res.status(500).json({
            error: 'an error has ocurred on server'
        })
    }
}

async function getColumns(req, res) {
    //obtiene por consulta de la url el valor con la clave board
    const boardId = req.query.board;
    const userId = req.user._id;

    try {
        const filters = {
            userId
        }
        if (boardId) {
            filters.boardId = boardId
        }
        const columns = await Column.find(filters);
        columns.forEach(col => col.userId = undefined)
        res.json(columns);

    } catch (e) {
        console.log(e.message);
        res.status(500).json({
            error: 'an error has ocurred'
        })
    }
}

async function updateColumn(req, res) {
    const userId = req.user._id;
    const { title, columnIndex } = req.body;
    const { columnId } = req.params;

    try {
        const column = await Column.findOne({ _id: columnId })

        if (!column) {
            return res.status(404).json({
                error: "column not found"
            })
        }
        if (title) {
            column.title = title;
        }
        if (columnIndex !== undefined) {
            column.columnIndex = columnIndex;
        }

        const newColumn = await Column.findOneAndUpdate({ _id: columnId, userId: userId }, column)
        if (!newColumn) {
            return res.status(500).json({
                error: "column not updated"
            })
        }

        res.status(200).json({
            title: column.title,
            columnId: column.columnId,
            columnIndex: column.columnIndex,
            boardId: column.boardId
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'an error has ocurred'
        })
    }

}
async function deleteColumn(req, res) {

    const userId = req.user._id;
    const { columnId } = req.params;

    try {
        const column = await Column.findById(columnId);

        if (!column) {
            return res.status(404).json({
                error: "column not found"
            })
        }

        await Column.findByIdAndDeleteHisRelations(columnId, userId)
        column.userId = undefined
        return res.status(200).json(column);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "error"
        })
    }

}

module.exports = { createColumn, getColumns, updateColumn, deleteColumn }