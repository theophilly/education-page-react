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

export default function Footer() {
  return (
    <Box
      sx={{
        '@media screen and (max-width: 800px)': {
          padding: '20px',
          flexDir: 'column-reverse',
        },
      }}
      flexWrap="wrap"
      p="120px"
      d="flex"
      minH="30vh"
      bg="#252020"
    >
      <Box
        sx={{
          '@media screen and (max-width: 800px)': {
            marginTop: '40px',
          },
        }}
        flex="0.33"
      >
        <Heading
          width="100%"
          as="h2"
          color="white"
          fontSize="1.3rem"
          fontFamily="Mulish, sans-serif"
        >
          Headquarter
        </Heading>
        <Text mt="1rem" lineHeight="1.7rem" color="#909090" fontSize="0.9rem">
          07069507640 <br />
          ***** a **** **** 12000
        </Text>
        <Box
          sx={{
            '@media screen and (max-width: 800px)': {
              marginTop: '0px',
            },
          }}
          mt="2rem"
        >
          <Flex
            align="center"
            sx={{
              '@media screen and (max-width: 800px)': {
                marginTop: '.2rem',
              },
            }}
            mt="1.5rem"
            gridGap="12px"
          >
            {[
              'fab fa-facebook-square icon change',
              'fab fa-twitter icon change',
              'fab fa-instagram icon change',
            ].map((item) => (
              <i className={`${item}`}></i>
            ))}
          </Flex>
          <Text
            mt="0.8rem"
            lineHeight="1.8rem"
            color="#909090"
            fontSize="0.9rem"
          >
            Copyright © 2022 Company Name <br />
            Design: By Kolade
          </Text>
        </Box>
      </Box>
      <Box
        sx={{
          '@media screen and (max-width: 800px)': {
            marginTop: '40px',
          },
        }}
        flex="0.33"
      >
        <Heading
          as="h2"
          color="white"
          fontSize="1.3rem"
          fontFamily="Mulish, sans-serif"
        >
          Contact Info
        </Heading>
        <Text mt="1rem" lineHeight="1.7rem" color="#909090" fontSize="0.9rem">
          07069507640 <br />
          theophilly20@gmail.com
        </Text>
        <Box mt="2rem">
          <Heading
            as="h2"
            color="white"
            fontSize="1.3rem"
            fontFamily="Mulish, sans-serif"
          >
            Quick Links
          </Heading>
          <Text
            mt="0.8rem"
            lineHeight="1.8rem"
            color="#909090"
            fontSize="0.9rem"
          >
            Copyright © 2022 Company Name <br />
            Design: By Kolade
          </Text>
        </Box>
      </Box>
      <Box overflow="hidden" flex="0.33">
        <Heading
          as="h2"
          color="white"
          fontSize="1.3rem"
          fontFamily="Mulish, sans-serif"
        >
          Newsletter Signup
        </Heading>
        <input className="footerInput" placeholder="Enter your email"></input>
        <button className="footerButton">send me</button>
      </Box>
    </Box>
  );
}
