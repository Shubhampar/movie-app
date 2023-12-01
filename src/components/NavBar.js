import { Link } from 'react-router-dom';
import { Box, Flex, Spacer, Button, Text } from '@chakra-ui/react';

const NavBar = ({ loggedIn, handleLogout }) => {
  return (
    <Box as="nav" bg="teal" color="white" p={4}>
      <Flex alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
          My Movie App
        </Text>
        <Spacer />
        <Flex alignItems="center">
          {!loggedIn ? (
            <>
              <Link to="/login">
                <Button colorScheme="whiteAlpha" variant="outline" mx={2}>
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button colorScheme="whiteAlpha" variant="outline" mx={2}>
                  Signup
                </Button>
              </Link>
            </>
          ) : (
            <Button colorScheme="whiteAlpha" variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
