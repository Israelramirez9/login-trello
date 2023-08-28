import React from 'react'
import useBoard from './useBoard'

type BoardProps = {
  id: string
}

function Board({ id }: BoardProps) {

  useBoard(id);

  return (
    <>{id}</>
  )
}

export default Board