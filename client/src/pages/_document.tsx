
import { BASE_PATH } from '@/config/basePath'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en">
      <Head >
        <link rel="icon" href={`${BASE_PATH}/favicon.png`} />
      </Head>
      <body>
        <main>
          <Main />{/*este componente es el que se va a mostrar siempre*/}
        </main>
        <NextScript /> {/*este componente es de next para depurar la aplicación */}
      </body>
    </Html>
  )
}
