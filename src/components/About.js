import React from 'react';
import {
  Box,
  Text,
  Heading,
  Circle,
  Flex,
  FormControl,
  Input,
  HStack,
  Divider,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FaUsers, FaCertificate, FaRegChartBar } from 'react-icons/fa';

export default function About() {
  const Course = ({ icon, title, content }) => {
    return (
      <HStack ml={25} mb={40}>
        <Circle size="50px" bg="rgb(41, 202, 142)" color="white">
          {icon === 'FaUsers' && <FaUsers size="30px" />}
          {icon === 'FaCertificate' && <FaCertificate size="30px" />}
          {icon === 'FaRegChartBar' && <FaRegChartBar size="30px" />}
        </Circle>
        <Flex direction="column">
          <Heading color="#454545" as="h3">
            {title}
          </Heading>
          <Text mt={7} fontSize="0.9rem">
            {content}
          </Text>
        </Flex>
      </HStack>
    );
  };
  return (
    <Flex
      wrap="wrap"
      h="auto"
      sx={{
        '@media screen and (max-width : 1000px)': {
          p: '70px 30px',
          maxW: 'auto',
          flexDir: 'column',
        },
      }}
      padding="0px 100px 100px"
      id="about"
    >
      <Box flex="1">
        <Heading mb={50} color="#353535" as="h2">
          Start your journey to a better life with online practical courses
        </Heading>
        {[
          {
            icon: 'FaUsers',
            title: 'Professional Trainers',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.',
          },
          {
            icon: 'FaCertificate',
            title: 'International Certifications',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.',
          },
          {
            icon: 'FaRegChartBar',
            title: 'Free for 3 months',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.',
          },
        ].map((item) => (
          <Course {...item} />
        ))}
      </Box>
      <Box
        sx={{
          '@media screen and (max-width : 1000px)': {
            p: '0px',
          },
        }}
        padding="50px 180px 80px"
        flex="0.5"
      >
        <Box padding="20px" border="1px solid grey">
          <Flex direction="column">
            <Heading as="h3"> Sign Up Now</Heading>
            <hr></hr>
          </Flex>
          <Box mt="20" flexDir="column" display="flex">
            <input placeholder="First name" />

            <input placeholder="Last name" />

            <input type="email" placeholder="Email" />
            <button className="signUp">Sign Up</button>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
