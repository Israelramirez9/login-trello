import React, { useContext } from 'react'
import '../styles/sliderMenu.css'
import { GrClose } from 'react-icons/gr'
import { UserContext } from '../../../auth/UserContext'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { createBoard, deleteBoard } from '../../../services/board.services'
import InputTitleBoard from './InputTitleBoard'
import { useNavigate } from 'react-router-dom'

function SliderMenu({ moveSlider }) {
    const navigate = useNavigate();
    const { globalState, setGlobalState } = useContext(UserContext);
    const { boardsFromServer } = globalState;
    let currentBoards = boardsFromServer;

    const selectBoard = (index) => {
        
        setGlobalState({ ...globalState, boardIndex: index })
        moveSlider();
        navigate('/trello')

    }

    const createNewBoard = async () => {
        try {
            const resp = await createBoard({ title: "New Board" })
            boardsFromServer.push(resp.data)
            setGlobalState({ ...globalState, boardsFromServer: boardsFromServer })
        } catch (error) {
            console.log(error);
        }
    }
    const deleteBoardCurrent = async (board) => {
        try {
            const resp = await deleteBoard(board.boardId)
            currentBoards = boardsFromServer.filter(boardFromServer => boardFromServer.boardId !== board.boardId)
            setGlobalState({ ...globalState, boardsFromServer: currentBoards, boardIndex: 0 })
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <aside className='slider-container'>
            <div className='close-aside-icon-container'>
                <GrClose className='close-aside-icon' onClick={moveSlider} />
            </div>
            <div className='logo-trello-aside-container'>
                <img src="./images/trello-logo.png" />
            </div>
            <ul className='name-list-boards-container'>
                {
                    boardsFromServer?.map((board, index) => (
                        <li key={index} >
                            <InputTitleBoard
                                board={board}
                                index={index}
                                deleteBoardCurrent={deleteBoardCurrent}
                                selectBoard={selectBoard}
                                boardsFromServer={boardsFromServer} />
                        </li>
                    ))
                }
            </ul>
            <div className='add-another-board-container' onClick={createNewBoard}>
                <div className='add-another-board'>
                    <AiOutlinePlusCircle className='add-another-board-icon' />
                    add another board
                </div>
            </div>
        </aside>
    )
}

export default SliderMenu