import React from 'react';
import { Box, Flex, Circle, Text, HStack } from '@chakra-ui/react';
import { FaPhoneAlt, FaShapes } from 'react-icons/fa';
import Scrollspy from 'react-scrollspy';

export default function Navbar() {
  return (
    <Flex
      className="ol"
      bg="white"
      id="section-1"
      position="fixed"
      zIndex="2"
      sx={{
        borderTop: '5px solid rgb(41, 202, 142)',
        borderBottom: '20px solid white',
      }}
      align="center"
    >
      <HStack>
        <FaShapes size={20} />
        <Text>Fedpoffa</Text>
      </HStack>

      <Scrollspy
        items={['section-1', 'section-2', 'section-3']}
        currentClassName="is-current"
      >
        <li>
          <a href="#section-1">Home</a>
        </li>
        <li>
          <a href="#section-2">About</a>
        </li>
        <li>
          <a href="#section-3">Our Teachers</a>
        </li>
        <li>
          <a href="#section-3">Courses</a>
        </li>
        <li>
          <a href="#section-3">Reviews</a>
        </li>
        <li>
          <a href="#section-3">Contact</a>
        </li>
      </Scrollspy>
      <HStack>
        <Circle size="30px" bg="rgb(41, 202, 142)" color="white">
          <FaPhoneAlt />
        </Circle>
        <Text>+2347069507640</Text>
      </HStack>
    </Flex>
  );
}
