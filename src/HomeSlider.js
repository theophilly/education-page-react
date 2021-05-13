import React, { useRef } from 'react';
import { Box, Text, Heading, Circle, Flex } from '@chakra-ui/react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function HomeSlider() {
  const DisplayBox = ({ number, title, content }) => {
    return (
      <Box
        padding="70px 30px"
        maxW="300px"
        w="auto"
        h="180px"
        border="1px solid #f0f0f0"
        borderRadius="5px"
      >
        <Box>
          <Circle mb="20px" size="55px" bg="#3f51b5" color="white">
            <Text
              fontFamily="Roboto, sans-serif"
              fontWeight="500"
              fontSize="25"
            >
              {number}
            </Text>
          </Circle>
          <Heading color="#454545" mb="10px" as="h3">
            {title}
          </Heading>
          <Text fontSize="1rem">{content}</Text>
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <Box
        sx={{
          '@media screen and (max-width : 750px)': {
            paddingTop: '60px',
          },
        }}
        paddingTop={92}
        h="auto"
        overflow="hidden"
      >
        <OwlCarousel
          autoplayHoverPause={false}
          animateOut="fadeOut"
          loop={true}
          style={{ color: 'white' }}
          items={1}
          dots={false}
          smartSpeed={1000}
          autoPlay={true}
          className="owl-carousel owl-theme"
        >
          <div className="item" id="box1">
            <Box
              width="40%"
              sx={{
                '@media screen and (max-width : 800px)': {
                  w: '80%',
                  left: '50',
                },
              }}
              position="absolute"
              top="20%"
              left="120"
              zIndex="5"
            >
              <Heading
                fontSize="clamp(16px, 5vw, 40px)"
                fontWeight="bold"
                mb="15px"
                lineHeight={{ 'base': '30px', 'md': '50px' }}
                as="h1"
              >
                Distant Learning <br /> Education Center
              </Heading>
              <Text lineHeight="25px">
                Our online courses are done in patnership with technology and
                are designed to meet industry demand{' '}
              </Text>
              <button variant="outline">Discover More</button>
            </Box>
            <img
              className="sliderImage"
              src="/images/slider-image3.jpg"
              alt="The Last of us"
            />
          </div>
          <div className="item" id="box2">
            <Box
              width="40%"
              position="absolute"
              sx={{
                '@media screen and (max-width : 800px)': {
                  w: '80%',
                  left: '50',
                },
              }}
              top="20%"
              left="120"
              zIndex="5"
            >
              <Heading
                fontSize="clamp(16px, 5vw, 40px)"
                fontWeight="bold"
                mb="15px"
                lineHeight="50px"
                as="h1"
                fontFamily="Poppins, sans-serif"
              >
                Start your journey with our practical courses
              </Heading>
              <Text lineHeight="25px">
                Our online courses are built in partnership with technology
                leaders and are designed to meet industry demands.
              </Text>
              <button variant="outline">Take a course</button>
            </Box>
            <img
              className="sliderImage"
              src="/images/slider-image2.jpg"
              alt="GTA V"
            />
          </div>
          <div className="item" id="box3">
            <Box
              width="40%"
              position="absolute"
              top="20%"
              sx={{
                '@media screen and (max-width : 800px)': {
                  w: '80%',
                  left: '50',
                },
              }}
              left="120"
              zIndex="5"
            >
              <Heading
                fontSize="clamp(16px, 5vw, 40px)"
                fontWeight="bold"
                mb="15px"
                lineHeight="50px"
                as="h1"
              >
                Efficient Learning Methods
              </Heading>
              <Text lineHeight="25px" fontSize="1rem">
                Nam eget sapien vel nibh euismod vulputate in vel nibh. Quisque
                eu ex eu urna venenatis sollicitudin ut at libero. Visit
              </Text>
              <button variant="outline">Let's chat</button>
            </Box>
            <img
              className="sliderImage"
              src="/images/slider-image1.jpg"
              alt="Mirror Edge"
            />
          </div>
        </OwlCarousel>
      </Box>
      <Flex
        wrap="wrap"
        gridGap="30px"
        justify="center"
        pt="100px"
        height="auto"
        minH="80vh"
      >
        {[
          {
            number: '01',
            title: 'Trending Courses',
            content:
              'Known is free education HTML Bootstrap Template. You can download and use this for your website.',
          },
          {
            number: '02',
            title: 'Books & Library',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.',
          },
          {
            number: '03',
            title: 'Certified Teachers',
            content:
              'templatemo provides a wide variety of free Bootstrap Templates for you. Please tell your friends about us. Thank you.',
          },
        ].map((each) => (
          <DisplayBox {...each} />
        ))}
      </Flex>
    </Box>
  );
}
