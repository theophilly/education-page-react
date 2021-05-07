import React from 'react';
import Navbar from './components/Navbar';
import HomeSlider from './HomeSlider';
import { Box } from '@chakra-ui/react';

export default function App() {
  return (
    <Box>
      <Navbar></Navbar>
      <HomeSlider></HomeSlider>
    </Box>
  );
}
