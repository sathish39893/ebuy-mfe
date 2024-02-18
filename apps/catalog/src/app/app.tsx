import { ChakraProvider, Flex, Heading, theme } from '@chakra-ui/react';
import ProductList from './product-list';
import React from 'react';

const Recommendations = React.lazy(() => import('recommendations/Module'));

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Flex p="2">
          <Heading>Product Catalog</Heading>
        </Flex>
        <ProductList />
        <Recommendations />
      </div>
    </ChakraProvider>
  );
}

export default App;
