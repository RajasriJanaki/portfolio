import {
  Box,
  Flex,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

const Links = ['Home', 'Projects', 'About Me'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
      color: 'white',
    }}
    fontSize={{ base: 'xl', sm: '2md', md: '5md' }}
    href={`${children}`}>
    {children}
  </Link>
);

export default function Header() {
  return (
    <Box
      className='blue-scheme'
      px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'flex-end'}>
        {Links.map((link) => (
          <NavLink key={link}>{link}</NavLink>
        ))}
      </Flex>
    </Box>
  );
}