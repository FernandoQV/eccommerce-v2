import { currentTheme } from '@/theme'
import Header from '@/ui/components/header'
import { ChakraProvider, Container, Grid } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const { session, ...rest } = pageProps

  return (
    <ChakraProvider theme={currentTheme}>
      <SessionProvider session={session}>
        <Container maxWidth={'container.xl'} minH="100vh">
          <Grid gridTemplateRows={'auto 1fr'}>
            <Header />
            <Component {...rest} />
          </Grid>
        </Container>
      </SessionProvider>
    </ChakraProvider>
  )
}

export default MyApp
