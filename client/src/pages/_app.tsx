import type { AppProps } from 'next/app'
import '@/styles/global.scss'
import { AuthProvider, StoreProvider } from '@/components/providers'
import { RouterMiddleware } from '@/components/middleware';
import Head from 'next/head';


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title> Trello | TasksList</title>
        <meta name="description" content="trello" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/**
     * proveo el store a mi aplicación
     */}
      <StoreProvider>

        { /**
      *verifico en el localStorage el token y modifico el estado isAuthenticated
      */}
        <AuthProvider>
          {
            /**
             * me encargo de dar o no paso a los hijos, verificando si ya está cargada la página
             */
          }
          <RouterMiddleware>
            <Component {...pageProps} />
          </RouterMiddleware>
        </AuthProvider>
      </StoreProvider>
    </>
  )
}
