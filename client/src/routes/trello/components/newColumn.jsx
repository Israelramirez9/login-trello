import React from 'react'
import '../styles/newColumn.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { createColumn } from '../../../services/columns.services'

function NewColumn({ columns, setColumns, boardId, columnsByBoard }) {
  const currentColumns = columns.slice();

  const createNewColumn = async () => {

    try {
      const resp = await createColumn({ title: "new list", columnIndex: columnsByBoard.length + 1, boardId: boardId })
      currentColumns.push(resp.data);

      setColumns(currentColumns);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='new-column' onClick={createNewColumn}>
      <AiOutlinePlusCircle className='add-column-icon' />
      <span>add another list</span>

    </div>
  )
}

export default NewColumn