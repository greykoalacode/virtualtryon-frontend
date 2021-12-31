import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  return (
    // position="absolute" left="0" bottom="0" width="100%"
    <Box
      as="footer"
      position="absolute"
      bottom="0"
      backgroundColor="mint"
      p={['2', '5']}
      textAlign="center"
      width="100%"
    >
      <Text fontSize={['xs', 'sm']}>
        Project presented for Academic purposes, not to be framed / used
        commercially. Created by <b>G5</b>
      </Text>
    </Box>
  );
}

export default Footer;
