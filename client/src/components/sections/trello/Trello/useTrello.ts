import { useState } from "react"


function useTrello() {
    const [isLoadingBoards, setIsLoadingBoards] = useState(false)
    const [message, setMessage] = useState('Loading boards...')
    return { message }

}

export default useTrello