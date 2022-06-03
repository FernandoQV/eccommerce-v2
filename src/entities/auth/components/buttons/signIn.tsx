import { Button } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import type { FC } from 'react'

interface signinProps {
  provider: string
}

const SignInButton: FC<signinProps> = ({ provider }) => {
  const hanlderSignIn = async (provider: string) => {
    await signIn(provider, { callbackUrl: 'https://myqato.vercel.app/ok' })
  }

  return (
    <Button colorScheme={'primary'} onClick={() => hanlderSignIn(provider)}>
      {provider.toUpperCase()}
    </Button>
  )
}

export default SignInButton
