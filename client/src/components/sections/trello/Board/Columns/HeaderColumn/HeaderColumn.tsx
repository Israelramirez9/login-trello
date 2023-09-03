import { ColumnWithTasks } from '@/store/reducers/trello'
import React from 'react'
import styles from './HeaderColumn.module.scss'
import useHeaderColumn from './useHeaderColumn'
import { AiFillEdit, AiOutlineStop } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { BsCheckLg } from 'react-icons/bs'
import { deleteAlert } from '@/swalsAndToster/swalsAndToster'

type HeaderColumnProps = {
    column: ColumnWithTasks
}

function HeaderColumn({ column }: HeaderColumnProps) {

    const { isEditing,
        handleChangeTitleBoard,
        handleStartEdit,
        handleStopEdit,
        columnTitle,
        isLoading,
        handleSendColumnTitle,
        handleDeleteColumn } = useHeaderColumn(column);


    return (
        <form className={styles['form']} onSubmit={handleSendColumnTitle}>
            {
                isEditing ?
                    <input
                        className={styles['input']}
                        value={columnTitle}
                        placeholder='title'
                        onChange={handleChangeTitleBoard}
                        disabled={isLoading}
                    />


                    :
                    <h3 className={styles['column-title']}>{column.title}</h3>
            }

            <div className={styles['icons-container']}>

                {
                    isEditing ?
                        <>
                            <button
                                className={`${styles['icon-button']} ${isLoading ? styles['icon-button-disabled'] : styles['stop']}`}
                                onClick={handleStopEdit} type='button'
                                disabled={isLoading}
                            >
                                <AiOutlineStop className={styles['icon']} />
                            </button>
                            <button
                                className={`${isLoading ? styles['icon-button-disabled'] : styles['check']} ${styles['icon-button']} `}
                                type='submit'
                                disabled={isLoading}
                            >
                                <BsCheckLg className={styles['icon']} />
                            </button>
                        </>
                        :

                        <button
                            className={`${isLoading ? styles['icon-button-disabled'] : styles['edit']} ${styles['icon-button']} `}
                            onClick={handleStartEdit}
                            type='button'
                            disabled={isLoading}
                        >
                            <AiFillEdit className={styles['icon']} />
                        </button>

                }
                <button
                    className={`${isLoading ? styles['icon-button-disabled'] : styles['trash']} ${styles['icon-button']} `}
                    type='button'
                    onClick={() => deleteAlert(handleDeleteColumn, 'column')}
                    disabled={isLoading}
                >
                    <FaTrash className={styles['icon']} />
                </button>

            </div>
        </form>

    )
}

export default HeaderColumn