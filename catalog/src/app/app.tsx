// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import ProductList from './product-list';
import React from 'react';

const Recommendations = React.lazy(() => import('recommendations/Module'));

export function App() {
  return (
    <ChakraProvider>
      <div>
        <Container><Heading> Catalog </Heading></Container>
        <ProductList />
        <Recommendations />
      </div>
    </ChakraProvider>
  );
}

export default App;
