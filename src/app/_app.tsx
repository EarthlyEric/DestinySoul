import type { AppProps } from 'next/app'
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Component {...pageProps} />
    <Script src="/resources/scripts/consle.js" strategy="afterInteractive"/>
    </>
  )
}