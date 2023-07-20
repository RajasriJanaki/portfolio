import {
    Flex,
    Badge,
    Text
  } from "@chakra-ui/react";
import * as React from "react";

const skillSet = ['GitHub', 'Java', 'ReactJs', 'Graph QL', 'HTML5', 'Javascript', 'Jenkins', 'Artifactory', 'Webpack', 'MFE Architecture'];

export default function Skills() {
    return (
      <Flex
        className="flex-box"
        direction={'column'}
        >
        <Text
            as={'span'}
            fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}>
            Skills
        </Text>
        <Flex
              className="flex-box"
              alignItems={'center'} justifyContent={'center'}>
              {
                skillSet.map((skill) => {
                  return (
                  <Badge variant='outline' colorScheme='green' fontSize='1.2em' >
                    {skill}
                  </Badge>
                  )
                })
              }
        </Flex>
      </Flex>
    );
}