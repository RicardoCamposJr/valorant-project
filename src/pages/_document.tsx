import { Html, Head, Main, NextScript } from 'next/document'
import { robotoFlex } from './_app'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ margin: 0 }} className={robotoFlex.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
