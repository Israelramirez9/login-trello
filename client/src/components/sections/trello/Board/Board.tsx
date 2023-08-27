import React from 'react'

type BoardProps = {
  id: string
}
function Board({ id }: BoardProps) {
  return (
    <>{id}</>
  )
}

export default Board