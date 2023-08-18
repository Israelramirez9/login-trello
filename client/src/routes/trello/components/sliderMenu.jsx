import React, { useContext } from 'react'
import '../styles/sliderMenu.css'
import { GrClose } from 'react-icons/gr'
import { UserContext } from '../../../auth/UserContext'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { createBoard } from '../../../services/board.services'

function SliderMenu({ moveSlider }) {
    const { globalState, setGlobalState } = useContext(UserContext);
    
    const selectBoard = (index) => {
        console.log(index)
        setGlobalState({ ...globalState, currentBoardIndex: index })
    }

    const createNewBoard = async () => {
        try {
            const resp = await createBoard({ title: "New Board" })
            console.log(resp.data)
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
                    globalState.boards?.map((board, index) => (
                        <li key={index} onClick={() => selectBoard(index)}>{board.title}</li>
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