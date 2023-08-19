import React, { useContext, useState } from 'react'
import '../styles/sliderMenu.css'
import { GrClose } from 'react-icons/gr'
import { UserContext } from '../../../auth/UserContext'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { createBoard } from '../../../services/board.services'

function SliderMenu({ moveSlider }) {
    const { globalState, setGlobalState } = useContext(UserContext);
    const { boards } = globalState;


    const selectBoard = (index) => {

        setGlobalState({ ...globalState, boardIndexSelected: index })
    }

    const createNewBoard = async () => {

        try {
            const resp = await createBoard({ title: "New Board" })
            setGlobalState({ ...globalState, boards: [...globalState.boards, resp.data] })

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

                    boards?.map((board, index) => (
                        <li key={index} onClick={() => selectBoard(index)}>{board.title}</li>
                    ))

                }

            </ul>
            <div className='add-another-board-container' >
                <div className='add-another-board' onClick={createNewBoard}>
                    <AiOutlinePlusCircle className='add-another-board-icon' />
                    add another board
                </div>
            </div>
        </aside>
    )
}

export default SliderMenu