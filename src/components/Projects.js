import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Avatar,
  IconButton,
  Flex,
  Icon
} from '@chakra-ui/react';
import {
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

export default function Projects() {
  return (
    <>
      <Container maxW={'3xl'} h='100vh'>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 6 }}
          py={{ base: 10, md: 16 }}>
          <Heading
            fontWeight={200}
            fontSize={{ base: '2lg', sm: '2xl', md: '4xl' }}
            lineHeight={'110%'}>
            <Text as={'span'}>
            Hi. I'm
            </Text>
          </Heading>
          <Heading
            fontWeight={400}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            <Text as={'span'} color={'#6750A4'}>
            Rajasri Janaki Raman
            </Text>
          </Heading>
          <Heading
            fontWeight={200}
            fontSize={{ base: '2lg', sm: '2xl', md: '4xl' }}
            lineHeight={'110%'}>
            Front-end developer
          </Heading>
        </Stack>
        <Avatar width={'200px'} h={'200px'} py={{ base: 10, md: 16 }}></Avatar>
        <Flex
            gap={10}
            display={'flex'}
            py={{ base: 10, md: 16 }}
            alignItems={'center'} justifyContent={'center'}>
            <IconButton
              w={'50px'} h={'50px'}
              variant="outline"
              aria-label="LinkedIn icon"
              icon={<Icon as={FaLinkedin} w={'30px'} h={'30px'}/>}
            />
            <IconButton
              variant="outline"
              w={'50px'} h={'50px'}
              aria-label="Github icon"
              icon={<Icon as={FaGithub} w={'30px'} h={'30px'}/>}
            />
        </Flex>
      </Container>
    </>
  );
}