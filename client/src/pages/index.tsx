'use client'
import { useAppSelector } from "@/store"
export default function Home() {



  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
  return (
    <>
      <div>
        {
          isAuthenticated ? 'está autenticado' : 'chupame el pingo'
        }
      </div>
    </>
  )
}
