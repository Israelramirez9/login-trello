const { board, Task, Board } = require('../models')
const { Types } = require('mongoose')

async function createBoard(req, res) {
    const userId = req.user._id;
    const board = new Board(req.body);

    try {
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
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: "An error has ocurred in the server"
        })
    }


}

async function updateBoard(req, res) {
    const userId = req.user._id;
    const { boardId } = req.params;
    const { title } = req.body;

    try {
        const board = await Board.findOne({ boardId: boardId, userId: userId });
        if (!board) {
            return res.status(404).json({
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
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: "An error has ocurred in the server"
        })
    }


}
async function deleteBoard(req, res) {
    const userId = req.user._id;
    const { boardId } = req.params;
    //si elimino el board voy a tener que eliminar las boardas y las tareas, creo una reacción en cadena para que se eliminen board-->boardas---->tareas
    try {
        let board = await Board.findById(boardId);

        if (!board) {
            return res.status(404).json({
                error: "boardId not found"
            })
        }
        await Board.findByIdAndDeleteHisRelations(boardId, userId)
        board.userId = undefined;
        res.status(200).json(board)
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            error: "An error has ocurred in the server"
        })
    }

}

async function getBoards(req, res) {
    const userId = req.user._id;
    try {
        const boards = await Board.find({ userId: userId })
        if (!boards) {
            return res.status(404).json({
                error: "userId not found"
            })
        }
        boards.forEach(board => board.userId = undefined)
        res.status(200).json(boards)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: 'An error has ocurred in the server'
        })
    }

}
async function getBoard(req, res) {
    const userId = req.user._id;
    const { boardId } = req.params

    try {
        const board = await Board.findOne({ userId: userId, _id: boardId })
        if (!board) {
            return res.status(404).json({
                error: "board not found"
            })
        }
        board.userId = undefined
        return res.status(200).json(board)


    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: 'An error has ocurred in the server'
        })
    }
}
module.exports = { createBoard, updateBoard, deleteBoard, getBoards, getBoard }