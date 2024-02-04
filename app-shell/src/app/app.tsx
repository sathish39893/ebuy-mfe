import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Container, Heading, theme } from '@chakra-ui/react';
import { Header } from '@ebuy/ui';

const Catalog = React.lazy(() => import('catalog/Module'));

const Checkout = React.lazy(() => import('checkout/Module'));

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <React.Suspense fallback={null}>
        <Header />
        <Routes>
          <Route path="/" element={<Container> <Heading> Home </Heading></Container>} />

          <Route path="/catalog" element={<Catalog />} />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </React.Suspense>
    </ChakraProvider>
  );
}

export default App;
