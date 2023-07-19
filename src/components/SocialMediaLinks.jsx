import {
  IconButton,
  Flex,
  Icon
} from "@chakra-ui/react";
import * as React from "react";
import {
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

export default function SocialMediaLinks() {
  return (
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
  );
}