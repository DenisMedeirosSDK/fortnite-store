import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Bowlby_One } from '@next/font/google'

const bowlby_One = Bowlby_One({
  weight: '400',
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --bowlby_one-font: ${bowlby_One.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
