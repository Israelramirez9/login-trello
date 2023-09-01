import { ColumnWithTasks } from '@/store/reducers/trello'
import React from 'react'
import TaskForm from './TaskForm/TaskForm'
import styles from './TasksSection.module.scss'
import Task from './Task/Task'


type TasksSectionProps = {
  column: ColumnWithTasks
}

function TasksSection({ column }: TasksSectionProps) {
 
  
  return (
    <div className={styles['taskForm-tasksList-container']}>
      <div className={styles['taskList-container']}>
        {

          column.tasks?.map((task) => (

            < Task key={task.taskId} task={task} />

          ))
        }
      </div>

      <TaskForm column={column} />




    </div>
  )
}

export default TasksSection