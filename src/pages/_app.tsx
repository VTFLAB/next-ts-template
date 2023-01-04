import '../styles/globals.css'

import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress />
      <Component {...pageProps} />
    </>
  )
}
