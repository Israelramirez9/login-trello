import React from 'react'
import useBoard from './useBoard'

type BoardProps = {
  id: string
}

function Board({ id }: BoardProps) {

  const { isError, actualBoard } = useBoard(id);

  return (
    <>
      {
        isError ?
          <p>Board Not Found</p>
          :
          <>
            <div>{actualBoard?.title}</div>
            <section>
              {
                actualBoard?.columns?.map((column) => (
                  <div key={column.columnId}>{column.title}</div>
                ))
              }
            </section>
          </>
      }
    </>
  )
}

export default Board