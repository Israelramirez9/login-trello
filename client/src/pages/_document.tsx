
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en">
      <Head >
        <title>Trello | List</title>
        <meta name="description" content="trello" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
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
