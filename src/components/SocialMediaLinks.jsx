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
      className="flex-box"
      alignItems={'center'} justifyContent={'center'}>
      <IconButton
        colorScheme='teal'
        w={'50px'} h={'50px'}
        variant="outline"
        aria-label="LinkedIn icon"
        icon={<Icon as={FaLinkedin} w={'30px'} h={'30px'}/>}
        onClick={() => window.open('https://www.linkedin.com/in/rajasrijr55/','_blank')}
      />
      <IconButton
        variant="outline"
        w={'50px'} h={'50px'}
        colorScheme='teal'
        aria-label="Github icon"
        icon={<Icon as={FaGithub} w={'30px'} h={'30px'}/>}
        onClick={() => window.open('https://github.com/RajasriJanaki','_blank')}
      />
    </Flex>
  );
}
