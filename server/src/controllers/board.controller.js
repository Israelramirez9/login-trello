const { Board } = require('../models')
const { Types } = require('mongoose')

async function createBoard(req, res) {
    const userId = req.user._id;
    const board = new Board(req.body);

    if (!Types.ObjectId.isValid(userId)) { //verifica si el id es valido
        return res.status(400).json({
            error: 'incorrect token'
        })
    }

    board.userId = userId;
    board.boardId = board._id;
    await board.save();
    board.userId = undefined
    res.status(201).json(board);

}
async function updateBoard(req, res) {
    const userId = req.user._id;
    const { boardId } = req.params;
    const { title } = req.body;

    const board = await Board.findOne({ boardId: boardId, userId: userId });
    if (!board) {
        res.status(404).json({
            error: "board not found"
        })
    }
    board.title = title;
    const updateBoard = await Board.findOneAndUpdate({ boardId: boardId, userId: userId }, board)
    if (!updateBoard) {
        return res.status(404).json({
            error: "invaled token"
        })
    }

    board.userId = undefined;
    res.status(202).json(board);

}
async function deleteBoard(req, res) {
    const userId = req.user._id;
    const { boardId } = req.params;
    //si elimino el board voy a tener que eliminar las columnas y las tareas, creo una reacción en cadena para que se eliminen board-->columnas---->tareas
    let board = await Board.findById(boardId);

    if (!board) {
        return res.status(404).json({
            error: "boardId not found"
        })
    }

    try {
        await Board.findByIdAndDeleteHisRelations(boardId, userId)
    } catch (e) {
        console.log(e)
        return res.status(404).json({
            error: "token or boardId invalid"
        })
    }
    board.userId = undefined;
    res.status(200).json(board)
}

async function getBoards(req, res) {
    const userId = req.user._id;

    const columns = await Board.find({ userId: userId })
    if (!columns) {
        res.status(404).json({
            error: "userId not found"
        })
    }
    columns.forEach(column => column.userId = undefined)
    res.status(202).json(columns)
}

module.exports = { createBoard, updateBoard, deleteBoard, getBoards }