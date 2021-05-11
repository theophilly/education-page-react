import React from 'react';
import Navbar from './components/Navbar';
import HomeSlider from './HomeSlider';
import { Box, Circle, Center } from '@chakra-ui/react';
import About from './components/About';
import Teachers from './components/Teachers';
import Courses from './components/Courses';

export default function App() {
  return (
    <Box>
      <Navbar></Navbar>
      <HomeSlider></HomeSlider>
      <About></About>
      <Teachers />
      <Courses />
    </Box>
  );
}
