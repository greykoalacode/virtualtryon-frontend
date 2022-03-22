import { Box, Button, Container, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { dressData } from '../../utils/data';
import ChakraCarousel from '../ChakraCarousel/ChakraCarousel';

function ChooseCloth({ onClick }) {
  return (
    <Container
      py={8}
      px={0}
      maxW={{
        base: '100%',
        sm: '35rem',
        md: '43.75rem',
        lg: '57.5rem',
        xl: '75rem',
        xxl: '87.5rem',
      }}
    >
      <ChakraCarousel gap={32}>
        {dressData.map(each => (
          <Box p={[2, 5]} borderRadius="0.25em" key={each.name} textAlign="center">
            <Image src={each.image} alt={each.name} />
            {/* <HStack
              spacing={5}
              direction={['column', 'row']}
              justify="space-between"
            > */}
              {/* <Text
                fontWeight="500"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              >
                {each.name}
              </Text> */}
              <Button size="sm" variant="solid" onClick={onClick}>
                Choose
              </Button>
            {/* </HStack> */}
          </Box>
        ))}
      </ChakraCarousel>
    </Container>
  );
}

export default ChooseCloth;
