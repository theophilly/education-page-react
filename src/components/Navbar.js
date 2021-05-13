import React, { useState } from 'react';
import { Box, Flex, Circle, Text, HStack } from '@chakra-ui/react';
import { FaPhoneAlt, FaShapes } from 'react-icons/fa';
import Scrollspy from 'react-scrollspy';

export default function Navbar() {
  const [hide, setHide] = useState('section-1');

  const hideUl = () => {
    var scroll = document.documentElement.scrollTop;
    if (scroll < window.innerHeight + 500) {
      setHide('');
    } else {
      setHide('section-1');
    }
  };
  window.onscroll = function () {
    hideUl();
  };
  return (
    <Flex
      id={hide}
      className="ol"
      bg="white"
      position="fixed"
      zIndex="2"
      height="74px"
      sx={{
        borderTop: '5px solid rgb(41, 202, 142)',
        borderBottom: '20px solid white',
        '@media screen and (max-width : 750px)': {
          justifyContent: 'space-around',
          paddingLeft: '0px',
          paddingRight: '0px',
          height: '60px',
          borderBottom: '0px solid white',
        },
      }}
      align="center"
    >
      <HStack>
        <FaShapes size={20} />
        <Text fontSize={20} fontFamily="Poppins, sans-serif" fontWeight="500">
          Fedpoffa
        </Text>
      </HStack>
      <input className="navMenu" type="checkbox" id="menu" />
      <label for="menu" id="nav-icon">
        <i class="fas fa-bars menu"></i>
      </label>

      <Scrollspy
        items={[
          'section-1',
          'about',
          'teacher',
          'courses',
          'reviews',
          'contact',
        ]}
        currentClassName="is-current"
      >
        <li>
          <a href="#section-1">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#teacher">Teachers</a>
        </li>
        <li>
          <a href="#courses">Courses</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </Scrollspy>
      <HStack
        sx={{
          '@media screen and (max-width : 900px)': {
            display: 'none',
          },
        }}
        className="phone"
      >
        <Circle size="30px" bg="rgb(41, 202, 142)" color="white">
          <FaPhoneAlt />
        </Circle>
        <Text>+2347069507640</Text>
      </HStack>
    </Flex>
  );
}
