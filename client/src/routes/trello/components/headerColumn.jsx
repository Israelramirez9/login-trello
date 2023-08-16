import React, { useRef, useState } from 'react'
import '../styles/headerColumn.css'

function HeaderColumn({ columnIndex }) {
    const [inputTitle, setInputTite] = useState({
        title: ""
    })
    function handleChange(event) {
        setInputTite({ title: event.target.value })
    }
    function writingInputcolumnTitle(event) {
        event.target.style.background = "white"
        event.target.style.textAlign = "left"
    }
    const column = useRef();

    function handleKeyDown(event) {
        if (event.keyCode == '13') {
            event.target.style.background = "#f1f2f4";
            event.target.style.color = "#273558";
            event.target.style.fontSize='large';
            event.target.style.textAlign = "center";
            if(event.target.value!==0){
                
            }
        }
    }


    function handleBlur(event) {
        event.target.style.background = "#f1f2f4";
        event.target.style.textAlign = "center";
        event.target.style.color = "#273558";

    }


    return (
        <input value={inputTitle.title} ref={column} className='input-Column-title' id={`input-Column${parseInt(columnIndex)}-title`} placeholder={'title Column ' + columnIndex} onFocus={writingInputcolumnTitle} onKeyDown={handleKeyDown} onBlur={handleBlur} onChange={handleChange} />
    )
}

export default HeaderColumn