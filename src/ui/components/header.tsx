import SignOutButton from '@/entities/auth/components/buttons/signOut'
import { Heading, Stack, Button, Link, Spinner } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'

import NextLink from 'next/link'
import type { FC } from 'react'

const Header: FC = () => {
  const { status } = useSession()

  return (
    <Stack flexDirection={'row'} justifyContent={'space-between'}>
      <Heading>Header</Heading>
      <Stack alignItems={'center'}>
        {status === 'loading' ? (
          <Spinner color="primary.500" />
        ) : (
          <Stack>
            {status === 'authenticated' ? (
              <SignOutButton />
            ) : (
              <NextLink href={'/auth/signin'}>
                <Button as={Link} colorScheme={'primary'}>
                  Iniciar
                </Button>
              </NextLink>
            )}
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}

export default Header
