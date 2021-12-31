import React from 'react';
import {
  Box,
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import Homepage from './Components/Homepage/Homepage';
import Button from './theme';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import TryOnDemo from './Components/TryOnDemo/TryOnDemo';
import TopVector from './Components/SVGs/TopVector';


const theme = extendTheme({
  colors: {
    mint: "#DDFFE7",
    spearmint: "#98D7C2",
    tealGreen: "#167D7F",
    teal: "#29A0B1"
    // brand: {
    //   "100": "#DDFFE7",
    //   "200": "#98D7C2",
    //   "300": "#167D7F",
    //   "400": "#29A0B1"
    // }
  },
  fonts: {
      body: "DM Sans"
  },
  components: {
    Button
  }
});
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box position="relative" minH="100vh">
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: -1}}>
          <TopVector />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="tryon" element={<TryOnDemo />} />
        </Routes>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
