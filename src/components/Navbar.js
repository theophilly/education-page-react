import React, { useState, useRef } from 'react';
import { Box, Flex, Circle, Text, HStack } from '@chakra-ui/react';
import { FaPhoneAlt, FaShapes } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import Scrollspy from 'react-scrollspy';

export default function Navbar() {
  const [hide, setHide] = useState('section-1');
  const myRef = useRef();

  const handleClick = () => {
    myRef.current.checked = false;
    scroll.scrollToTop();
  };

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
      border="1px solid red"
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
      <input ref={myRef} className="navMenu" type="checkbox" id="menu" />
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
        <Link
          onClick={() => handleClick()}
          to="section-1"
          duration={2000}
          smooth={true}
        >
          <li>Home</li>
        </Link>
        <Link
          onClick={() => (myRef.current.checked = false)}
          to="about"
          duration={2000}
          smooth={true}
        >
          <li>About</li>
        </Link>
        <Link
          onClick={() => (myRef.current.checked = false)}
          to="teacher"
          duration={2000}
          smooth={true}
        >
          <li>Teacher</li>
        </Link>
        <Link
          onClick={() => (myRef.current.checked = false)}
          to="courses"
          duration={2000}
          smooth={true}
        >
          <li>Courses</li>
        </Link>
        <Link
          onClick={() => (myRef.current.checked = false)}
          to="reviews"
          duration={2000}
          smooth={true}
        >
          <li>Reviews</li>
        </Link>
        <Link
          onClick={() => (myRef.current.checked = false)}
          to="contact"
          duration={2000}
          smooth={true}
        >
          <li>Contact</li>
        </Link>
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
