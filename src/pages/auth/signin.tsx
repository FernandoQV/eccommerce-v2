import SignInButton from '@/entities/auth/components/buttons/signIn'
import { Center, Heading, Stack } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import { getSession, getProviders } from 'next-auth/react'
interface Props {
  providers: any
}
const SigninPage: NextPage<Props> = ({ providers }) => {
  const providersAuth:Array<any> = Object.values(providers)

  return (
    <>
      <Center
        boxShadow={'xs'}
        flexDirection={'column'}
        maxWidth={'fit-content'}
        padding={8}
        rounded="lg"
      >
        <Heading>Inicia Session</Heading>
        <Stack>
            {providersAuth.map(prov=>(
                <SignInButton key={prov.id} provider={prov.id}/>
            ))}
        </Stack>
      </Center>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (session)
    return {
      props: {},
      redirect: { destination: '/' },
    }
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
export default SigninPage
