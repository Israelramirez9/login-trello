import React from 'react'
import useTrello from './useTrello'

function Trello() {
    const { isLoadingBoards } = useTrello();



    return (
        <div style={{ position: "absolute" }}>Trello</div>
    )
}

export default Trello