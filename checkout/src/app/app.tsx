// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import React from 'react';

export function App() {
  return (
    <ChakraProvider>
      <div>
        <Container><Heading> Checkout </Heading></Container>
      </div>
    </ChakraProvider>
  );
}

export default App;
