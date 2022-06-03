import React from 'react'
import { Button, Heading, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { signIn, signOut } from 'next-auth/react'
const Home: NextPage = () => {
  const onLogin = async () => {
    await signIn('google')
  }
const onLogOut=async(e:React.MouseEvent<HTMLButtonElement>)=>{
  e.preventDefault()
  await signOut()
}

  return (
    <Stack maxW={'container.sm'}>
      <Heading>App</Heading>
      <Button colorScheme={'red'} size={'lg'} onClick={onLogin}>
        Login google
      </Button>
      <Button onClick={e=>onLogOut(e)}>Log Out</Button>
    </Stack>
  )
}

export default Home
