import { Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function UserDetails() {
    return (
        <Stack align="center" minW="150px">
            <Image borderRadius="full" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" boxSize={{ base: '60px', md: '90px'}} />
            <Text fontSize="sm" isTruncated>User Name too long</Text>
            <Text fontSize="sm" isTruncated>My role is Blah blah blah</Text>
        </Stack>
    )
}

export default UserDetails
