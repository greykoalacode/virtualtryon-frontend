import React, { Fragment, useState } from 'react';
import {
  Box,
  Input,
  Text,
  Image,
  Button,
  Stack,
  Flex,
  List,
  ListItem,
  ListIcon,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { CheckCircleIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ChooseCloth from './ChooseCloth';

function InstructionStages({ isTryOnLoading, onVisualiseDress }) {
  const [image, setImage] = useState(null);
  const [cropData, setCropData] = useState('#');
  const [cropper, setCropper] = useState();
  const [isDone, setDone] = useState(false);
  const [isDressChosen, setDressChosen] = useState(false);
  const onSelectImage = e => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  const getCropData = () => {
    if (typeof cropper !== 'undefined') {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };
  return (
    <Fragment>
      <Text fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} fontWeight="500">
        Instructions
      </Text>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} />
          <b>Upload the Person Image here</b>
          <Flex
            border="1px"
            position="relative"
            bg="tealGreen"
            borderRadius="0.25em"
            padding="2"
            ml="5"
            textAlign="center"
            // cursor="pointer"
            maxW="100px"
          >
            <Text
              color="mint"
              fontWeight="500"
              fontSize="sm"
              textTransform="uppercase"
            >
              Click here
            </Text>
            <Input
              position="absolute"
              opacity="0"
              type="file"
              onChange={onSelectImage}
              accept="image/*"
            />
          </Flex>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} />
          <b>Crop the image here (Upper Half of person to be selected)</b>
          <Box position="relative">
            {image && !isDone && (
              <Box p={[2, 5]}>
                <Box width="100%">
                  <Cropper
                    style={{ height: 350, width: '100%' }}
                    zoomTo={0.5}
                    initialAspectRatio={1}
                    // preview=".img-preview"
                    src={image}
                    viewMode={1}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    background={false}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                    onInitialized={instance => {
                      setCropper(instance);
                    }}
                    guides={true}
                  />
                </Box>
                <Box>
                  {/* Use if Preview Needed */}
                  {/* <Stack gap="5" display="inline-block" p="5" width="50%" boxSizing="border-box">
                              <Text fontSize="2xl" fontWeight="500">Preview</Text>
                              <Box className="img-preview" float="left" display="inline-block" height="500px" width="100%" overflow="hidden" />
                          </Stack> */}
                  <Box
                    display="inline-block"
                    p="5"
                    width="100%"
                    boxSizing="border-box"
                  >
                    <Stack gap="3">
                      <SimpleGrid minChildWidth="180px" gap="5">
                        <Text fontSize="2xl" fontWeight="500" minW="180px">
                          Cropped Image
                        </Text>
                        <HStack
                          direction={['column', 'row']}
                          spacing={3}
                          minW="170px"
                        >
                          <Button
                            size="sm"
                            variant="solid"
                            onClick={getCropData}
                          >
                            Crop
                          </Button>
                          <Button
                            size="sm"
                            variant="solid"
                            onClick={() => setDone(true)}
                          >
                            Finalise Crop
                          </Button>
                        </HStack>
                      </SimpleGrid>
                      {cropData !== '#' && (
                        <Image
                          alignSelf="start"
                          src={cropData}
                          alt="cropped"
                          height="350px"
                          width="auto"
                          margin="0 !important"
                        />
                      )}
                    </Stack>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} />
          <b>Choose your preferred Cloth here</b>
          {isDone && !isDressChosen && (
            <ChooseCloth onClick={() => setDressChosen(true)} />
          )}
        </ListItem>
      </List>
      <Button
        my="5"
        variant="solid"
        disabled={!isDone && !isDressChosen}
        isLoading={isTryOnLoading}
        rightIcon={<ChevronRightIcon />}
        onClick={onVisualiseDress}
      >
        Visualise Dress
      </Button>
    </Fragment>
  );
}

export default InstructionStages;
