import { Task } from '@/services/tasks.services'
import React from 'react'
import useTask from './useTask';
import { BsFillClipboard2CheckFill } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import styles from './Task.module.scss'
import { deleteAlert } from '@/utils/swal';

type TaskProps = {
  task: Task
}
function Task({ task }: TaskProps) {
  const { handleMovementTask,
    handleDeleteTask,
    handleIsCompleted,
    isCompleted,
    isLoading,
    leftRow,
    rightRow } = useTask(task);

  return (
    <>
      <div className={styles['task-container']}>
        {
          leftRow ?
            <button onClick={() => handleMovementTask('left')} className={`${styles['button-icon']} ${styles['button-left']}`}>
              <AiOutlineLeft className={styles['icon']} />
            </button> : null
        }
        <p className={`${isCompleted ? styles['text-completed'] : null} ${styles['text-task']}`}>
          {task.text}
        </p>
        <div className={styles['check-trash-container']}>
          <button onClick={handleIsCompleted} className={`${styles['button-icon']} ${styles['button-check']}`}>
            <BsFillClipboard2CheckFill className={styles['icon']} />
          </button>
          <button onClick={() => deleteAlert(handleDeleteTask, 'task')} className={`${styles['button-icon']} ${styles['button-trash']}`}>
            <FaTrash className={styles['icon']} />
          </button>

          {
            rightRow ?
              <button onClick={() => handleMovementTask('right')} className={`${styles['button-icon']} ${styles['button-right']}`}>
                <AiOutlineRight className={styles['icon']} />
              </button> : null
          }
        </div>
      </div>
    </>

  )
}

export default Task