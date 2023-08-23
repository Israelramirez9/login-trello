import React, { useEffect, useState } from 'react'
import '../styles/headerColumn.css'
import { updateColumn, deleteColumn } from '../../../services/columns.services'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { getTask } from '../../../services/tasks.services'
import swal from 'sweetalert'
function HeaderColumn({ columnIndex, title, columnId, columns, setColumns, setTask }) {

    let currentTasks = [];
    let currentColumns = [];
    const [inputTitle, setInputTitle] = useState({
        title: title,
        columnId: columnId
    })

    useEffect(() => {
        setInputTitle({ ...inputTitle, title })
    }, [title])

    function handleChange(event) {
        setInputTitle({ ...inputTitle, title: event.target.value })
    }
    function writingInputcolumnTitle(event) {
        event.target.style.background = "white"
        event.target.style.textAlign = "left"
    }

    const alertDelete = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover these tasks!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your task has been deleted!", {
                        icon: "success",
                    });
                    deleteColumnClick();
                } else {
                    swal("Your task is safe!");
                }
            });
    }
    
    const deleteColumnClick = async () => {


        try {
            const resp = await deleteColumn(columnId, columnId);
            currentColumns = columns.filter(col => col.columnId !== columnId)
            currentTasks = await getTask();
            setTask(currentTasks.data);
            setColumns(currentColumns);
        } catch (error) {
            console.log(error)
        }

    }

    async function handleKeyDown(event) {
        if (event.keyCode == '13') {
            event.target.style.background = "#f1f2f4";
            event.target.style.fontSize = 'large';
            try {
                const resp = await updateColumn(columnId, inputTitle)
                console.log(resp.data)
                columns.forEach(column => {
                    if (column.columnId === columnId) {
                        column.title = resp.data.title
                    }
                })
                setColumns(columns);
            } catch (error) {
                console.log(error)
            }
        }
    }

    function handleBlur(event) {
        event.target.style.background = "#f1f2f4";
        event.target.style.textAlign = "center";
    }

    return (
        <div className='header-column-container'>
            <input
                value={inputTitle.title}
                className='input-Column-title'
                id={`input-Column${parseInt(columnIndex)}-title`}
                placeholder={'title Column ' + columnIndex}
                onFocus={writingInputcolumnTitle}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                onChange={handleChange}
            />


            <BsFillTrash3Fill className='icon-trash-column' onClick={alertDelete} />


        </div>)
}

export default HeaderColumn