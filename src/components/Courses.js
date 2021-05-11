import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  VStack,
  WrapItem,
  Avatar,
  Spacer,
} from '@chakra-ui/react';

export default function Courses() {
  const data = [
    {
      image: 'images/courses-image1.jpg',
      date: '12 / 7 / 2018',
      hours: '7 Hours',
      title: 'Social Media Management',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      authorImage: 'images/author-image1.jpg',
      authorName: 'Mark Wilson',
      price: 'USD 25',
    },
    {
      image: 'images/courses-image2.jpg',
      date: '20 / 7 / 2018',
      hours: '9.9 Hours',
      title: 'Graphic & Web Design',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      authorImage: 'images/author-image2.jpg',
      authorName: 'Jessica',
      price: 'USD 80',
    },
    {
      image: 'images/courses-image3.jpg',
      date: '14 / 7 / 2020',
      hours: '4.8 Hours',
      title: 'Marketing Communication',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      authorImage: 'images/author-image3.jpg',
      authorName: 'Catherine',
      price: 'Free',
    },
    {
      image: 'images/courses-image4.jpg',
      date: '14 / 7 / 2021',
      hours: '2 Hours',
      title: 'Summer Kids',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      authorImage: 'images/author-image1.jpg',
      authorName: 'Mark Wilson',
      price: 'USD 30',
    },
    {
      image: 'images/courses-image5.jpg',
      date: '15 / 2 / 2021',
      hours: '5.1 Hours',
      title: 'Business & Management',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      authorImage: 'images/author-image1.jpg',
      authorName: 'Christopher',
      price: 'USD 50',
    },
  ];
  const Single = ({
    image,
    date,
    hours,
    title,
    content,
    authorImage,
    authorName,
    price,
  }) => {
    return (
      <Flex direction="column">
        <Box
          pos="relative"
          w="330px"
          sx={{
            '@media screen and (max-width : 1000px)': {
              width: '500px',
            },
          }}
        >
          <img className="cimage" src={`${image}`}></img>
          <Flex
            color="white"
            fontWeight="500"
            bottom="0"
            py="20px"
            pl="20"
            bg="linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7))"
            w="calc(100% - 20px)"
            pos="absolute"
          >
            <Text mr="10px">
              <i class="fas fa-calendar-alt"></i>
              {date}
            </Text>
            <Text>
              <i class="far fa-clock"></i> {hours}
            </Text>
          </Flex>
        </Box>
        <Flex
          w="330px"
          sx={{
            '@media screen and (max-width : 1000px)': {
              width: '500px',
            },
          }}
          direction="column"
          h="170px"
          bg="#f9f9f9"
        >
          <Box
            pl="20px"
            h="62%"
            d="flex"
            flexDir="column"
            justifyContent="center"
          >
            <Heading fontSize="1.2em" color="#454545" as="h3">
              {title}
            </Heading>
            <Text mt="3px" color="black" fontSize="0.8rem">
              {content}
            </Text>
          </Box>
          <Flex
            align="center"
            pl="25px"
            gridGap="12px"
            h="38%"
            borderTop="1px solid #f0f0f0"
          >
            <WrapItem maxH="45px" maxW="45px" alignItems="center">
              <img className="cimage2" src={`${authorImage}`} />
              <Text
                fontFamily="Poppins, sans-serif"
                fontWeight="600"
                fontSize="0.8rem"
                color="#454545"
                minW="80px"
              >
                {authorName}
              </Text>
            </WrapItem>
            <Spacer />
            <Box
              color="white"
              borderRadius="3px"
              fontWeight="500"
              padding="6px 10px"
              bg={price === 'Free' ? '#3f51b5' : 'rgb(41, 202, 142)'}
              fontSize="0.9rem"
            >
              {price}
            </Box>
          </Flex>
        </Flex>
      </Flex>
    );
  };
  return (
    <Box id="courses" minH="115vh" bg="white">
      <VStack justifyContent="center" h="30vh">
        <Heading color="#353535" as="h2" fontSize="1.7em">
          Popular Courses
        </Heading>
        <Text>Upgrade your skills with newest courses</Text>
      </VStack>

      <Flex align="center" justify="center">
        <Box
          width="80%"
          sx={{
            '@media screen and (max-width : 1000px)': {
              width: '500px',
            },
          }}
        >
          <OwlCarousel
            autoplayHoverPause={false}
            animateOut="fadeOut"
            loop={true}
            dots={false}
            smartSpeed={1000}
            autoPlay={true}
            nav={true}
            navText={[
              '<i class="fa fa-angle-left"></i>',
              '<i class="fa fa-angle-right"></i>',
            ]}
            responsive={{
              0: {
                items: 1,
              },
              1000: {
                items: 2,
              },
              1276: {
                items: 3,
              },
            }}
            className="owl-carousel owl-theme"
          >
            <div class="item">
              <Single {...data[0]} />
            </div>
            <div class="item">
              <Single {...data[1]} />
            </div>
            <div class="item">
              <Single {...data[2]} />
            </div>
            <div class="item">
              <Single {...data[3]} />
            </div>
            <div class="item">
              <Single {...data[4]} />
            </div>
          </OwlCarousel>
        </Box>
      </Flex>
    </Box>
  );
}
