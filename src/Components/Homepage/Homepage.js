import { Box, Button, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import TryOn from '../SVGs/TryOn';
import UserDetails from '../User Details/UserDetails';

function Homepage() {
  return (
    <>
      {/* <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: -1}}>
        <TopVector />
      </div> */}
      <Box py={{ base: 10, md: 20 }} px={{ base: 5, md: 10 }}>
        <SimpleGrid
          p="5"
          minChildWidth="250px"
          spacing="1em"
          alignItems="center"
        >
          <Stack spacing="10" maxW="32rem">
            <Text
              fontWeight="700"
              fontSize={{ base: '4xl', md: '7xl', lg: '9xl' }}
            >
              Virtual Try <em style={{ color: '#98D7C2' }}>On</em>
            </Text>
            <Text fontSize={{ base: '2xl', md: '4xl' }}>
              choose. fit. buy.{' '}
            </Text>
            <Button
              as="a"
              href="/tryon"
              variant="solid"
              size="md"
              fontSize="2xl"
              bg="tealGreen"
            >
              Get Started
            </Button>
          </Stack>
          <TryOn />
        </SimpleGrid>
        <SimpleGrid
          minChildWidth="250px"
          p={{ base: 2, md: 5 }}
          my="5"
          spacing="1em"
          alignItems="center"
        >
          <Box maxW="500px">
            <Text fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
              This Website is part of Final Year Project presented by students
              of{' '}
              <b>Electronics & Telecommunications Department (Batch of 2022)</b>{' '}
              at <em>SIES Graduate School of Technology, Nerul</em>
            </Text>
          </Box>
          <Stack>
            <Stack align="center" my="5">
              <Text fontSize="3xl" fontWeight="500">
                Project Guide
              </Text>
              <UserDetails />
            </Stack>
            <Text fontSize="3xl" fontWeight="500" textAlign="center">
              Team Members
            </Text>
            <SimpleGrid minChildWidth="140px" spacing="1em">
              <UserDetails />
              <UserDetails />
              <UserDetails />
              <UserDetails />
            </SimpleGrid>
          </Stack>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Homepage;
