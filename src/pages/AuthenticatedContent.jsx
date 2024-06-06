import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSupabaseAuth } from '../integrations/supabase/auth';
import { Container, Heading, Text, VStack, Box } from '@chakra-ui/react';

const AuthenticatedContent = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate('/');
    }
  }, [session, navigate]);

  if (!session) {
    return null;
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Protected Content</Heading>
        <Text fontSize="xl">This content is only visible to authenticated users.</Text>
        <Box mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="lg" width="100%" maxW="md">
          <Text fontSize="md">Here is some exclusive content that only authenticated users can see. Enjoy your stay!</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default AuthenticatedContent;