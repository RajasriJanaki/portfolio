import {
    Box,
    Text,
    Stack,
    Heading,
    Flex,
    Image,
    Fade,
    Button
  } from '@chakra-ui/react';
  import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
  import { experience } from "../data/projects";
  import Skills from './Skills';

  export default function Projects() {
    return (
      <Box p='20px'
        color={'#DFDCE3'} m={'10'} id='Projects'>
        <Flex
          direction='column'
          alignItems='space-around'
          gap='10'>
            <Box>
              <Heading
                  fontWeight={200}
                  fontSize={{ base: '2lg', sm: '2xl', md: '4xl' }}
                  lineHeight={'100%'}>
                  <Text as={'span'}>
                    Projects
                  </Text>
              </Heading>
            </Box>
            <Flex direction='row' wrap='wrap' gap='10' alignItems={'center'} justifyContent={'center'}>
                {experience?.map((job) => {
                  return <>
                    {job.projects.map((project) => {
                    return (
                        <Card
                          bg="#4A5568"
                          color="#F7FAFC"
                          direction={{ base: 'column', sm: 'row' }}
                          p='5'
                          maxW='md'
                          overflow='hidden'
                        >
                          <Image
                            objectFit='scale-down'
                            maxH={{ base: '100px', sm: '200px' }}
                            maxW={{ base: '100px', sm: '200px' }}
                            src={job.logo}
                            alt='Caffe Latte'
                          />

                          <Stack>
                            <CardBody>
                              <Heading size='sm'>{project.title}</Heading>

                              <Text py='2'>
                                {project.text}
                              </Text>
                            </CardBody>
                          </Stack>
                        </Card>
                    )
                  })}
                  </>
                })}
            </Flex>
        </Flex>
      </Box>
    );
  }