import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import styles from './Columns.module.scss'
import useColumns from './useColumns'
import { useAppSelector } from '@/store';
import { HeaderColumn } from './HeaderColumn';

function Columns() {
    const { handleCreateNewColumn } = useColumns();
    const { actualBoard } = useAppSelector(state => state.trello)
    return (
        <>
            {
                actualBoard?.columns?.map((column) => (
                    <div className={styles['column']} key={column.columnId}>
                        <div className={styles['header-column']}>
                            <HeaderColumn column={column} />
                        </div>

                    </div>
                ))
            }
            <div className={styles['new-column']} onClick={handleCreateNewColumn}>
                <AiOutlinePlusCircle className={styles['add-column-icon']} />
                <span>add another list</span>
            </div>
        </>
    )
}

export default Columns