import React from 'react';
import Navbar from './components/Navbar';
import HomeSlider from './HomeSlider';
import { Box, Circle, Center } from '@chakra-ui/react';
import About from './components/About';
import Teachers from './components/Teachers';
import Courses from './components/Courses';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HomeSlider></HomeSlider>
      <About></About>
      <Teachers />
      <Courses />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
