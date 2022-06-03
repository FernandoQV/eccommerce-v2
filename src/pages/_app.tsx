import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const { session, ...rest } = pageProps

  return (
    <ChakraProvider>
      <SessionProvider session={session}>
        <Component {...rest} />
      </SessionProvider>
    </ChakraProvider>
  )
}

export default MyApp
