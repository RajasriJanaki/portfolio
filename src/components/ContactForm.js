import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Heading, Input, Textarea, Button, FormControl, FormErrorMessage } from '@chakra-ui/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xaygnank");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <Box mt={8} p={4} borderRadius="md" boxShadow="md">
      <Heading as="h3" size="lg" mb={4}>
        Contact Me
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={state.errors.email?.length > 0} mb={4}>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <FormErrorMessage>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={state.errors.message?.length > 0} mb={4}>
          <Textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={5}
          />
          <FormErrorMessage>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="teal" isLoading={state.submitting}>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default ContactForm;
