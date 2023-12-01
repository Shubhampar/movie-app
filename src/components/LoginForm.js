import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Heading,
} from '@chakra-ui/react';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const handleLogin = () => {
    // Perform validation if needed

    // Simulate a login by storing user info in localStorage
    localStorage.setItem('user', JSON.stringify({ email }));
    onLogin();
    
    // Redirect to the movie page after successful login
    navigate('/');
  };

  return (
    <Box maxW="400px" mx="auto" mt={8} p={4} borderWidth="1px" rounded="md">
      <Heading mb={4}>Login</Heading>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </FormControl>
      <Button colorScheme="blue" onClick={handleLogin} mt={4}>
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
