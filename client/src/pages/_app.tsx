import type { AppProps } from 'next/app'
import '@/styles/global.scss'
import { AuthProvider, StoreProvider } from '@/components/providers'
import { RouterMiddleware } from '@/components/middleware';


export default function App({ Component, pageProps }: AppProps) {

  return (
    <StoreProvider>
      <AuthProvider>
        <RouterMiddleware>
          <Component {...pageProps} />
        </RouterMiddleware>
      </AuthProvider>
    </StoreProvider>
  )
}
