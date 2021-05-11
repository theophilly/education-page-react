import React from 'react';
import {
  Box,
  Image,
  Flex,
  Circle,
  Text,
  HStack,
  Heading,
} from '@chakra-ui/react';

export default function Contact() {
  return (
    <Box d="flex" minH="85vh" bg="#3f51b5">
      <Box
        fontFamily="Poppins, sans-serif"
        p="100px 100px 0px"
        w="calc(50% - 200px)"
      >
        <Box mb="30px" color="white">
          <Heading as="h2" fontSize="1.9rem" fontFamily="Mulish, sans-serif">
            Contact us
          </Heading>
          <Text fontFamily="Mulish, sans-serif">
            we love conversations. let us talk!
          </Text>
        </Box>
        <form>
          <input placeholder="enter your full name"></input>
          <input type="email" placeholder="enter your email address"></input>
          <textarea placeholder="Do drop your message"></textarea>
          <button onClick={(e) => e.preventDefault()}>Send Message</button>
        </form>
      </Box>
      <Box w="50%">
        <Image h="100%" w="100%" src="images/contact-image copy.jpg"></Image>
      </Box>
    </Box>
  );
}
