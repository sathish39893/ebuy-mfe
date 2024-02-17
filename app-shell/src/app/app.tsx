import * as React from 'react';

import { Route, Routes } from 'react-router-dom';
import {
  ChakraProvider,
  Heading,
  theme,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { Header } from '@ebuy/ui';
import { useLikeStore } from 'store/Module';
import { FcLike } from 'react-icons/fc';
import { useShoppingCartStore } from 'store/Module';

const Catalog = React.lazy(() => import('catalog/Module'));
const Checkout = React.lazy(() => import('checkout/Module'));

const Home = () => (
  <Flex p="2">
    <Heading>Home</Heading>
  </Flex>
);

export function App() {
  const { count, increment } = useLikeStore();
  const { items } = useShoppingCartStore();
  return (
    <ChakraProvider theme={theme}>
      <React.Suspense fallback={<Text>Error Occured</Text>}>
        <Header cartItemsCount={items.length}/>
        <Flex minWidth="max-content" alignItems="center" gap="4" p="2">
          <Icon
            cursor="pointer"
            as={FcLike}
            boxSize={6}
            color="pink.500"
            onClick={increment}
          />
          <Text>{count} Likes</Text>
        </Flex>
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
