import React from 'react'
import type { FC } from 'react'
import { signOut } from 'next-auth/react'
import { Button } from '@chakra-ui/react'
const SignOutButton: FC = () => {
  const handlerSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    await signOut()
  }

  return (
    <Button colorScheme={'red'} onClick={handlerSignOut}>
      Cerrar Session
    </Button>
  )
}

export default SignOutButton
