import * as React from 'react';

import { Route, Routes } from 'react-router-dom';
import {
  ChakraProvider,
  Heading,
  theme,
  Flex,
  Progress,
} from '@chakra-ui/react';
import { LikeContextProvider } from 'store/Module';
import { AppHeader } from './AppHeader';

const Catalog = React.lazy(() => import('catalog/Module'));
const Checkout = React.lazy(() => import('checkout/Module'));

const Home = () => (
  <Flex p="2">
    <Heading>Home</Heading>
  </Flex>
);

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <LikeContextProvider>
        <React.Suspense fallback={<Progress size="xs" isIndeterminate />}>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </React.Suspense>
      </LikeContextProvider>
    </ChakraProvider>
  );
}

export default App;
