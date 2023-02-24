import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { client } from '@/libs/apollo'
import { ApolloProvider } from '@apollo/client'
import { Bowlby_One } from '@next/font/google'
import { SessionProvider } from "next-auth/react"

const bowlby_One = Bowlby_One({
  weight: '400',
  subsets: ['latin']
})

export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <style jsx global>
          {`
          :root {
            --bowlby_one-font: ${bowlby_One.style.fontFamily};
          }
        `}
        </style>
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  )
}
