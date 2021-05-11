import React from 'react';
import { Box, Flex, Text, Image, Heading, VStack } from '@chakra-ui/react';

export default function Teachers() {
  const Single = ({ icons = [], name, sub, path }) => {
    return (
      <Flex direction="column">
        <Box w="260px">
          <Image w="100%" h="auto" objectFit="contain" src={`${path}`}></Image>
        </Box>
        <Flex mt="-5px" w="260px" direction="column" h="150px" bg="white">
          <Box
            pl="20px"
            h="62%"
            d="flex"
            flexDir="column"
            justifyContent="center"
          >
            <Heading fontSize="1.2em" color="#454545" as="h3">
              {name}
            </Heading>
            <Text mt="3px" fontSize="0.9rem">
              {sub}
            </Text>
          </Box>
          <Flex
            align="center"
            pl="10px"
            gridGap="12px"
            h="38%"
            borderTop="1px solid #f0f0f0"
          >
            {icons.map((item) => (
              <i className={`${item}`}></i>
            ))}

            <i className="fab fa-facebook-square icon"></i>
          </Flex>
        </Flex>
      </Flex>
    );
  };
  return (
    <Box id="teacher" minH="110vh" bg="#f9f9f9">
      <VStack justifyContent="center" h="30vh">
        <Heading color="#353535" as="h2" fontSize="1.7em">
          Teachers
        </Heading>
        <Text>Meet Professional Trainers</Text>
      </VStack>
      <Flex wrap="wrap" gridGap="30px" justify="center">
        {[
          {
            name: 'Mark Wilson',
            sub: 'I love Teaching',
            path: '/images/author-image1.jpg',
            icons: [
              'fab fa-facebook-square icon',
              'fab fa-twitter icon',
              'fab fa-instagram icon',
            ],
          },
          {
            name: 'Catherine',
            sub: 'Education is the key!',
            path: '/images/author-image2.jpg',
            icons: ['fab fa-google icon', 'fab fa-instagram icon'],
          },
          {
            name: 'Jessie Ca',
            sub: 'I like Online Courses!',
            path: '/images/author-image3.jpg',
            icons: [
              'fab fa-twitter icon',
              'fas fa-envelope icon',
              'fab fa-linkedin-in icon',
            ],
          },
          {
            name: 'Andrew Berti',
            sub: 'Learning is fun',
            path: '/images/author-image4.jpg',
            icons: [
              'fab fa-twitter icon',
              'fab fa-google icon',
              'fab fa-behance icon',
            ],
          },
        ].map((item) => (
          <Single {...item} />
        ))}
      </Flex>
    </Box>
  );
}
