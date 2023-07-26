import React, { useState } from 'react';
import { Box, Heading, Text, Link, Highlight, useColorModeValue } from '@chakra-ui/react';
import ContactForm from './ContactForm';

const About = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [highlighted, setHighlighted] = useState(true);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const highlightColor = useColorModeValue('teal.100', 'teal.700');

  return (
    <Box py={8} maxW="800px" mx="auto" fontFamily="Georgia, sans-serif">
    <Heading
      fontWeight={200}
      fontSize={{ base: '2lg', sm: '2xl', md: '4xl' }}
      lineHeight={'100%'}>
      <Text as={'span'}>
        About Me
      </Text>
    </Heading>
      <Text fontSize="lg" textAlign="justify" mt='10'>
        &nbsp;&nbsp;Hello! I'm Rajasri, a passionate software developer with expertise in front-end development and strong analytical skills.
        I've worked on various projects, leveraging HTML5, CSS3, and JavaScript, including ES5 and ES6, to create engaging web applications.
        ReactJS is my go-to framework, and I excel in developing interactive UIs using React.js with Redux architecture for efficient state management.
        Throughout my career, I've collaborated with Agile/Scrum teams, participating in the full software development life cycle.
      </Text>
      <Text fontSize="lg" mt={4} textAlign="justify" mt='5'>
        &nbsp;&nbsp;I hold a Bachelor's degree in Computer Science and Engineering and have pursued certifications in front-end development and Agile methodologies.
      </Text>
      <Text fontSize="lg" mt={4} textAlign="justify" mt='5'>
        &nbsp;&nbsp;My passion lies in crafting exceptional user experiences and staying at the forefront of emerging technologies.
        I'm open to exciting projects and collaborations, so feel free to&nbsp;
        <Link bg={'teal.500'} color="white.500" onClick={handleContactClick} fontSize={'2xl'}>
          {`reach out`}
        </Link>
        &nbsp;to discuss potential opportunities.
      </Text>
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </Box>
  );
};

export default About;
