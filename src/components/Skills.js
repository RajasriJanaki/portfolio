import {
    IconButton,
    Flex,
    Icon,
    Button,
    Badge,
    Heading,
    Text
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
        display={'flex'}
        direction={'column'}
        gap={'5'}>
        <Text
            as={'span'}
            fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}>
            Skills
        </Text>
        <Flex
              gap={10}
              display={'flex'}
              py={'5'}
              alignItems={'center'} justifyContent={'center'}>
            <Badge variant='outline' colorScheme='green' fontSize='1.2em' >
              GitHub
            </Badge>
            <Badge variant='outline' colorScheme='green' fontSize='1.2em' >
              Java
            </Badge>
            <Badge variant='outline' colorScheme='green' fontSize='1.2em' >
              ReactJs
            </Badge>
            <Badge variant='outline' colorScheme='green' fontSize='1.2em' >
              Graph QL
            </Badge>
            <Badge variant='outline' colorScheme='green' fontSize='1.2em' >
              HTML5
            </Badge>
            <Badge variant='outline' colorScheme='green' fontSize='1.2em' >
              Javascript
            </Badge>
            <Badge variant='outline' colorScheme='green' fontSize='1.2em' >
              Jenkins
            </Badge>
            <Badge variant='outline' colorScheme='green' fontSize='1.2em' >
              Artifactory
            </Badge>
            <Badge variant='outline' colorScheme='green' fontSize='1.2em' >
              Webpack
            </Badge>
            <Badge variant='outline' colorScheme='green' fontSize='1.2em' >
              MFE Architecture
            </Badge>
        </Flex>
      </Flex>
    );
  }