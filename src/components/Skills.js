import {
    IconButton,
    Flex,
    Icon
  } from "@chakra-ui/react";
  import * as React from "react";
  import {
    FaGithub,
    FaJava,
    FaReact,
    FaHtml5,
    FaJenkins
  } from "react-icons/fa";
  import {
    SiJavascript
  } from "react-icons/si";

  export default function Skills() {
    return (
        <Flex
              gap={10}
              display={'flex'}
              py={{ base: 10, md: 16 }}
              alignItems={'center'} justifyContent={'center'}>
            <IconButton
                variant="outline"
                w={'60px'} h={'60px'}
                aria-label="Github icon"
                icon={<Icon as={FaGithub} w={'50px'} h={'50px'}/>}
              />
            <IconButton
                variant="outline"
                w={'50px'} h={'50px'}
                aria-label="Java icon"
                icon={<Icon as={FaJava} w={'30px'} h={'30px'}/>}
              />
            <IconButton
                variant="outline"
                w={'50px'} h={'50px'}
                aria-label="React icon"
                icon={<Icon as={FaReact} w={'30px'} h={'30px'}/>}
              />

            <IconButton
                variant="outline"
                w={'50px'} h={'50px'}
                aria-label="HTML icon"
                icon={<Icon as={FaHtml5} w={'30px'} h={'30px'}/>}
              />

            <IconButton
                variant="outline"
                w={'50px'} h={'50px'}
                aria-label="JS icon"
                icon={<Icon as={SiJavascript} w={'30px'} h={'30px'}/>}
              />

            <IconButton
                variant="outline"
                w={'50px'} h={'50px'}
                aria-label="Jenkins icon"
                icon={<Icon as={FaJenkins} w={'30px'} h={'30px'}/>}
              />

        </Flex>
    );
  }