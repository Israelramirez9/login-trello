import React from 'react'
import { AiOutlineClose, AiOutlinePlusCircle } from 'react-icons/ai'
import styles from './Columns.module.scss'
import useColumns from './useColumns'
import { useAppSelector } from '@/store';
import { HeaderColumn } from './HeaderColumn';
import TasksSection from './TasksSection/TasksSection';

function Columns() {

    const { handleCreateNewColumn,
        handleChangeColumnName,
        handleShowForm,
        isSelectNewColumn,
        nameNewColumn } = useColumns();

    const { actualBoard } = useAppSelector(state => state.trello)

    return (
        <>
            {
                actualBoard?.columns?.map((column) => (


                    < div className={styles['column']} key={column.columnId} >
                        <div className={styles['col-independent']}>
                            <div className={styles['header-column']}>
                                <HeaderColumn column={column} />

                            </div>
                            <TasksSection column={column} />
                        </div>
                    </div >


                ))
            }
            {
                isSelectNewColumn ?
                    <form onSubmit={handleCreateNewColumn} className={styles['form']}>
                        <textarea className={styles['text-area']}
                            value={nameNewColumn}
                            onChange={handleChangeColumnName}
                            placeholder='Enter a title for this new column...'
                        />

                        <div className={styles['action-add-task-container']}>
                            <button className={styles['button-add-task']}
                                type='submit'>
                                <span>Add Card</span>
                            </button>
                            <button className={styles['button-not-add']}
                                onClick={handleShowForm}
                                type='button'>
                                <AiOutlineClose className={styles['icon']} />
                            </button>
                        </div>
                    </form>
                    :

                    <div className={styles['new-column']} onClick={handleShowForm}>
                        <AiOutlinePlusCircle className={styles['add-column-icon']} />
                        <span>add another list</span>
                    </div>

            }


        </>
    )
}

export default Columns