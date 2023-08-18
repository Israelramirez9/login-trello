import React from 'react'
import '../styles/newColumn.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { createColumn } from '../../../services/columns.services'
function NewColumn({ columns, setColumns }) {
  const currentColumns = columns.slice();

  const createNewColumn = async () => {

    try {
      const resp = await createColumn({ title: "new list", columnIndex: columns.length + 1 })
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