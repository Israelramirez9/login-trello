'use client'

import { useRouter } from "next/router"
import { useEffect } from "react";
export default function Home() {
    
    const { push } = useRouter();

    useEffect(() => {
        push('/trello')
    }, [])
    return null
}
