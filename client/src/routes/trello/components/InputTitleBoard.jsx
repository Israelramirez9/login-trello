import React, { useContext } from 'react'
import '../styles/sliderMenu.css'
import { BsFillTrash3Fill, BsPencilSquare, BsCheckSquare } from 'react-icons/bs'
import { updateBoard } from '../../../services/board.services';
import { UserContext } from '../../../auth/UserContext';

function InputTitleBoard({ board, index, deleteBoardCurrent, selectBoard, boardsFromServer }) {

    const { globalState, setGlobalState } = useContext(UserContext);

    async function handleKeyDown(event) {
        if (event.keyCode == '13') {
            event.target.style.background = "#fff";
            event.target.setAttribute('readOnly', null)
            console.log(event.target.value)
            console.log(board.boardId)
            if (event.target.value !== 0) {
                try {
                    const resp = await updateBoard(board.boardId, { title: event.target.value })
                    boardsFromServer.forEach(boardFromServer => {
                        if (boardFromServer.boardId === board.boardId) {
                            board.title = resp.data.title
                        }
                    })
                    setGlobalState({ ...globalState, boardsFromServer: boardsFromServer })
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
    const changeBoardName = () => {
        const boardElement = document.getElementById('board-' + index)
        boardElement.removeAttribute('readOnly');
        boardElement.style.background = '#a4a7a680';
    }

    return (
        <>
            <button onClick={() => selectBoard(index)} className='check-icon-container'>
                <BsCheckSquare className='check-icon' />
            </button>
            <input
                placeholder={board.title}
                className='input-title-board'
                id={'board-' + index.toString()}
                readOnly
                onKeyDown={handleKeyDown}
            />
            <button className='board-edit-icon-container'>
                <BsPencilSquare className='board-edit-icon' onClick={changeBoardName} />
            </button>
            {
                boardsFromServer.length > 1 ?
                    <button className='board-trash-icon-container' onClick={() => deleteBoardCurrent(board, index)}>
                        <BsFillTrash3Fill className='board-trash-icon' />
                    </button>
                    : null
            }
        </>
    )
}

export default InputTitleBoard