'use client'

import { Redirect } from "@/components/sections/miscellaneous";
import { useRouter } from "next/router"
import { useEffect } from "react";
export default function Home() {

    const { push } = useRouter();

    useEffect(() => {

        push('/trello')
    }, [])

    return <Redirect />
}
