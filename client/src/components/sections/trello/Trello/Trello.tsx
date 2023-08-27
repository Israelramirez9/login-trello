import React from 'react'
import useTrello from './useTrello'
import { RunningCircleSpinner } from '@/components/commons';

function Trello() {
    const { isLoadingBoards } = useTrello();



    return (
        <div style={{ position: "absolute" }}>
            <RunningCircleSpinner />
        </div>
    )
}

export default Trello