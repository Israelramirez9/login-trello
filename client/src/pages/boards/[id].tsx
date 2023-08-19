import { useRouter } from 'next/router'

export default function Board() {
    const router = useRouter()
    return <p>Board: {router.query.id}</p>
}