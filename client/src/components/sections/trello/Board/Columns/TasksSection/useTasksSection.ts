import React, { useEffect, useState } from 'react'

function useTasksSection() {

    const [isError, setIsError] = useState(false);

    
    return { isError }

}

export default useTasksSection