import React from 'react'
import useTaskForm from './useTaskForm';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import styles from './TaskForm.module.scss'
import { ColumnWithTasks } from '@/store/reducers/trello';

type TasksSectionProps = {
  column: ColumnWithTasks
}
function TaskForm({ column }: TasksSectionProps) {

  const { handleChangeTaskForm,
    handleSendTaskForm,
    handleStopTaskForm,
    isEditing,
    isError,
    isLoading,
    taskText,
    handleStartEdit } = useTaskForm(column);

  return (
    <>
      {
        isEditing ?
          <>
            <form onSubmit={handleSendTaskForm} className={styles['form']}>
              <textarea className={styles['text-area']}
                value={taskText}
                onChange={handleChangeTaskForm}
                placeholder='Enter a title for this card...'
              />

              <div className={styles['action-add-task-container']}>
                <button className={styles['button-add-task']}
                  type='submit'>
                  <span>Add Task</span>
                </button>
                <button className={styles['button-not-add']}
                  onClick={handleStopTaskForm}
                  type='button'>
                  <AiOutlineClose className={styles['icon']} />
                </button>
              </div>
            </form>
          </>
          :

          <button className={styles['add-card-button']}
            onClick={handleStartEdit}>
            <AiOutlinePlus className={styles['icon']} />
            <span>Add a card</span>
          </button>

      }

    </>

  )
}

export default TaskForm