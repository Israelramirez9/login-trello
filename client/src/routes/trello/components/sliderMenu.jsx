import React from 'react'
import '../styles/sliderMenu.css'
import { GrClose } from 'react-icons/gr'


function SliderMenu({ moveSlider }) {
    return (
        <aside className='slider-container'>
            <div className='close-aside-icon-container'>
                <GrClose className='close-aside-icon' onClick={moveSlider}/>
            </div>
            <div className='logo-trello-aside-container'>
                <img src="./images/trello-logo.png" />
            </div>
        </aside>
    )
}

export default SliderMenu