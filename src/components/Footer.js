import {
    Box,
    Container,
    Stack,
    Text,
    Link,
  } from '@chakra-ui/react';

  export default function Footer() {
    return (
      <Box
        bg={'#E8DEF8'}
        color={'#21005E'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'center' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2023 Rajasri Janaki Raman. All rights reserved</Text>
        </Container>
      </Box>
    );
  }