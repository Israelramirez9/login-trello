import React from 'react'
import useBoard from './useBoard'
import styles from './Board.module.scss'
import Columns from './Columns/Columns'
import { Loading } from '../..'
type BoardProps = {
  id: string
}

function Board({ id }: BoardProps) {

  const { isError, actualBoard, isLoading } = useBoard(id);

  if (isLoading) return (
    <>
      <Loading />
      <span>Bringying yours boards...</span>
    </>
  )

  return (
    <>
      {
        isError ?
          <p>Board Not Found</p>
          :
          <>
            <div className={styles['title-container']}>
              <div className={styles['board-title']}>{actualBoard?.title}</div>
            </div>
            <section className={styles['columns-container']}>
              <Columns />
            </section>
          </>
      }
    </>
  )
}

export default Board