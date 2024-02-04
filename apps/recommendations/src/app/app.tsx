// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChakraProvider, Container, Heading } from '@chakra-ui/react';

export function App() {
  return (
    <ChakraProvider>
      <div>
        <Container><Heading> Recommendations </Heading></Container>
      </div>
    </ChakraProvider>
  );
}

export default App;
