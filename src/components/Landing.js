import {
    Box,
    Heading,
    Container,
    Text,
    Stack,
    Avatar,
    HStack,
    VStack,
  } from '@chakra-ui/react';
import profile from "../assets/images/avatar.jpg";
import SocialMediaLinks from './SocialMediaLinks';
import Skills from "./Skills";

  export default function Landing() {
    return (
      <>
        <Container maxW={'3xl'} color={'#F8EEE7'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 6 }}
            py={{ base: 5, md: 8 }}>
            <Heading
              fontWeight={200}
              fontSize='lg'
              lineHeight={'100%'}>
              <Text as={'span'}>
              Hi. I'm
              </Text>
            </Heading>
            <Heading
              fontWeight={400}
              fontSize='4xl'
              lineHeight={'110%'}
              color={'#438496'}>
              <Text as={'span'}>
              Rajasri Janaki Raman
              </Text>
            </Heading>
            <Heading
              fontWeight={200}
              fontSize='xl'
              lineHeight={'110%'} color={'#F8EEE7'}>
              Front-end developer
            </Heading>
          </Stack>
          <Avatar py={{ base: 5, md: 5 }} w={'xs'} h={'xs'} src={profile}></Avatar>

          <SocialMediaLinks />
          <Skills />
        </Container>
      </>
    );
  }