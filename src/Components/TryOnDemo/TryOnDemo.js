import { Box, Text, Image, Stack, Button, Spinner } from '@chakra-ui/react';
import React, { useState } from 'react';
import Tshirt from '../../Assets/Images/Tshirt.png';
import InstructionStages from './InstructionStages';

function TryOnDemo() {
  // const [image, setImage] = useState(null);
  // const [cropData, setCropData] = useState('#');
  // const [cropper, setCropper] = useState();
  // const [isDone, setDone] = useState(false);
  // const [isDressChosen, setDressChosen] = useState(false);
  const [isTryOnLoading, setTryOnLoading] = useState(false);
  const [showFinal, setFinal] = useState(false);
  // //   console.log(inputImg);
  // const onSelectImage = e => {
  //   e.preventDefault();
  //   let files;
  //   if (e.dataTransfer) {
  //     files = e.dataTransfer.files;
  //   } else if (e.target) {
  //     files = e.target.files;
  //   }
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setImage(reader.result);
  //   };
  //   reader.readAsDataURL(files[0]);
  // };
  // const getCropData = () => {
  //   if (typeof cropper !== 'undefined') {
  //     setCropData(cropper.getCroppedCanvas().toDataURL());
  //   }
  // };

  const onVisualiseDress = () => {
    setTryOnLoading(true);
    setTimeout(() => {
      setTryOnLoading(false);
      setFinal(true);
    }, 1500);
  };
  return (
    <Box p={[5, 10, 20]}>
      <Text fontWeight="700" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
        Try On
      </Text>
      <Box p={[2, 5]} borderRadius="0.25em" boxShadow="md">
        {showFinal ? (
          <Stack align="center" spacing={5}>
            <Text fontWeight="700" size={{ base: '2xl', md: '3xl', lg: '4xl' }}>
              Final Image
            </Text>
            <Image boxSize={['sm', 'md']} src={Tshirt} />
            <Button as="a" href="/">
              Back to Homepage
            </Button>
          </Stack>
        ) : isTryOnLoading ? (
          <Stack align="center">
            <Spinner color="tealGreen" size="lg" />
            {/* <CircularProgress isIndeterminate color="tealGreen" size="1.5em" /> */}
          </Stack>
        ) : (
          <InstructionStages
            isTryOnLoading={isTryOnLoading}
            onVisualiseDress={onVisualiseDress}
          />
        )}
      </Box>
      {/* <Box p={[5, 10, 15]} borderRadius="1em"> */}
      {/* <HStack direction={['column','row']} spacing="1em">
          <Text fontWeight="500" fontSize={{ base: '2xl', md: '3xl' }}>
            Upload Person Image
          </Text>
          <Flex border="1px" position="relative" bg="tealGreen" borderRadius="1em" padding="2" textAlign="center" maxW="120px">
            <Text fontWeight="500" fontSize="xl">Click here</Text>
            <Input position="absolute" opacity="0" type="file" onChange={onSelectImage} accept="image/*" />
          </Flex>
        </HStack> */}
      {/* </Box> */}
    </Box>
  );
}

export default TryOnDemo;
