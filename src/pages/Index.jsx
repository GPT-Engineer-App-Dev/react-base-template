import { Container, Text, VStack, Heading, Button, Box, Input, Link, FormControl, FormLabel } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Your New React App</Heading>
        <Text fontSize="xl">This is your starting point. Begin building something amazing!</Text>
        <Button leftIcon={<FaRocket />} colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
      <Box mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="lg" width="100%" maxW="md">
        <VStack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <Button colorScheme="teal" size="lg" width="100%">Login</Button>
          <Link color="teal.500" href="#">Forgot Password?</Link>
          <Link color="teal.500" href="#">Sign Up</Link>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;