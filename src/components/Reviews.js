import React from 'react';
import { Box, Text, Heading, VStack, Flex, HStack } from '@chakra-ui/react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Reviews() {
  const DisplayBox = ({ icons = [], title, content, name, image }) => {
    return (
      <Box
        bg="white"
        padding="30px 30px"
        width="280px"
        height="250px"
        borderRadius="5px"
      >
        <Box>
          <Flex h="90px" mb={7} alignItems="center">
            <Box mr={15} h="62px" w="62px" alignItems="center">
              <img className="rimage" src={`${image}`} />
            </Box>
            <Flex direction="column">
              <Text
                fontFamily="Poppins, sans-serif"
                fontWeight="600"
                fontSize="1rem"
                color="#454545"
              >
                {name}
              </Text>
              <Text color="#808080" mt={1} fontSize="0.8rem">
                {title}
              </Text>
            </Flex>
          </Flex>
          <Text color="#757575" lineHeight="1.7rem" fontSize="0.9rem">
            {content}
          </Text>
          <Box mt="0.5rem">
            {icons.map(() => (
              <i class="fas fa-star rstar"></i>
            ))}
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <Box padding="50px 100px 100px" id="reviews" h="100vh" bg="#f9f9f9">
      <VStack h="30vh" justifyContent="center">
        <Heading color="#353535" as="h2" fontSize="1.7em">
          Student Reviews
        </Heading>
        <Text>from around the world</Text>
      </VStack>

      <Flex align="center" justify="center">
        <Box
          width="95%"
          display="flex"
          gridGap="20px"
          sx={{
            '@media screen and (max-width : 1000px)': {
              width: '300px',
            },
          }}
        >
          <OwlCarousel
            autoplayHoverPause={false}
            animateOut="fadeOut"
            loop={true}
            dots={true}
            smartSpeed={1000}
            autoPlay={true}
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
            {[
              {
                image: 'images/tst-image1.jpg',
                name: 'Jackson',
                title: 'Shopify Developer',
                content:
                  'You really do help young creative minds to get quality education and professional job search assistance. I’d recommend it to everyone!',
                icons: Array(4).fill(''),
              },
              {
                image: 'images/tst-image2.jpg',
                name: 'Camila',
                title: 'Marketing Manager',
                content:
                  'You really do help young creative minds to get quality education and professional job search assistance. I’d recommend it to everyone!',
                icons: Array(5).fill(''),
              },
              {
                image: 'images/tst-image3.jpg',
                name: 'Barbie',
                title: 'Art Director',
                content:
                  'You really do help young creative minds to get quality education and professional job search assistance. I’d recommend it to everyone!',
                icons: Array(2).fill(''),
              },
              {
                image: 'images/tst-image4.jpg',
                name: 'Andrio',
                title: 'Web Developer',
                content:
                  'You really do help young creative minds to get quality education and professional job search assistance. I’d recommend it to everyone!',
                icons: Array(5).fill(''),
              },
            ].map((item) => (
              <div class="item">
                <DisplayBox {...item} />
              </div>
            ))}
          </OwlCarousel>
        </Box>
      </Flex>
    </Box>
  );
}
