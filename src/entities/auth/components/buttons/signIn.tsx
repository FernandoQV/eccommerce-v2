import { Button } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import type { FC } from 'react'

interface signinProps {
  provider: string
}

const SigninButton: FC<signinProps> = ({ provider }) => {
  const hanlderSignIn = async (provider: string) => {
    await signIn(provider)
  }

  return (
    <Button colorScheme={'primary'} onClick={() => hanlderSignIn(provider)}>
      {provider.toUpperCase()}
    </Button>
  )
}

export default SigninButton
