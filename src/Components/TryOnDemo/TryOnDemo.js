import { Box, Text, Image, Stack, Button, Spinner, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import RoughOP from '../../Assets/Images/roughOP.png';
import Model from '../../Assets/Images/model.png';
import RoughWarp from '../../Assets/Images/roughwarp.jpg';
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
            <Text fontWeight="700" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
              Final Image(s)
            </Text>
            <HStack textAlign="center">
              <Box>
                <Text fontSize="2xl" fontWeight="bold">Model</Text>
                <Image boxSize="300px" src={Model} />
              </Box>
              <Box>
                <Text fontSize="2xl" fontWeight="bold">Warped Cloth</Text>
                <Image boxSize="300px" src={RoughWarp} />
              </Box>
              <Box>
                <Text fontSize="2xl" fontWeight="bold">Rough Output</Text>
                <Image boxSize="300px" src={RoughOP} />
              </Box>
            </HStack>
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
    </Box>
  );
}

export default TryOnDemo;
