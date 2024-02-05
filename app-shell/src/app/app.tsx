import * as React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Button, ChakraProvider, Container, Heading, theme } from '@chakra-ui/react';
import { Header } from '@ebuy/ui';
import useLikeStore from 'store/Module';

const Catalog = React.lazy(() => import('catalog/Module'));
const Checkout = React.lazy(() => import('checkout/Module'));

const Home = () => (<Container> <Heading> Home </Heading></Container>)

export function App() {
  const { count, increment } = useLikeStore();
  return (
    <ChakraProvider theme={theme}>
      <React.Suspense fallback={null}>
        <Header />
        <Button onClick={increment}>{count} Likes</Button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </React.Suspense>
    </ChakraProvider>
  );
}

export default App;
