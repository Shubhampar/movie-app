import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Heading,
} from '@chakra-ui/react';

const SignupForm = ({ onSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSignup = () => {
    // Perform validation if needed

    // Simulate signup by storing user info in localStorage
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    // onSignup();
    window.alert('Signup successful!');
    navigate('/login');
  };

  return (
    <Box maxW="400px" mx="auto" mt={8} p={4} borderWidth="1px" rounded="md">
      <Heading mb={4}>Signup</Heading>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </FormControl>
      <FormControl mt={4}>
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
      <Button colorScheme="blue" onClick={handleSignup} mt={4}>
        Signup
      </Button>
    </Box>
  );
};

export default SignupForm;
