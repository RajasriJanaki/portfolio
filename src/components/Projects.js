import {
    Box,
    Container,
    Stack,
    Text,
    Link,
  } from '@chakra-ui/react';
import Carousel from './Carousel';

  export default function Projects() {
    return (
      <Box
        textAlign={'center'}
        bg={'#438496'}
        color={'#DFDCE3'} h={'100vh'} pd="100">
          <Carousel />
      </Box>
    );
  }