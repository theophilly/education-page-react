import React, { useRef } from 'react';
import { Box } from '@chakra-ui/react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function HomeSlider() {
  const options = {
    animateOut: 'fadeOut',
    items: 1,
    loop: true,
    dots: false,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
  };

  return (
    <Box
      paddingTop={90}
      height="calc(100vh - 90px)"
      maxW="100vw"
      overflow="hidden"
    >
      <OwlCarousel items={1} smartSpeed={1000} options={options}>
        <Box>
          <img src="/images/slider-image1.jpg" alt="The Last of us" />
        </Box>
        <Box>
          <img src="/images/slider-image2.jpg" alt="GTA V" />
        </Box>
        <Box>
          <img src="/images/slider-image3.jpg" alt="Mirror Edge" />
        </Box>
      </OwlCarousel>
    </Box>
  );
}
