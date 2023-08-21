import type { AppProps } from 'next/app'
import '@/styles/global.scss'
import { AuthProvider, StoreProvider } from '@/components/providers'


export default function App({ Component, pageProps }: AppProps) {

  return (
    <StoreProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </StoreProvider>
  )
}
