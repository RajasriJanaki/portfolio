import {
    Box,
    Container,
    Stack,
    Text,
  } from '@chakra-ui/react';

  export default function Footer() {
    return (
      <Box
        className='blue-scheme'>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Text>© 2023 Rajasri Janaki Raman. All rights reserved</Text>
        </Container>
      </Box>
    );
  }