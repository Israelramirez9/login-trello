import { useState } from "react"


function useTrello() {
    const [isLoadingBoards, setIsLoadingBoards] = useState(false)

    return { isLoadingBoards }

}

export default useTrello