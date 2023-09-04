import { useState } from 'react'

function useTasksSection() {

    const [isError] = useState(false);


    return { isError }

}

export default useTasksSection