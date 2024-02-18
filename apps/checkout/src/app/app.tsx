import { ChakraProvider, Flex, Heading, Stack, theme } from '@chakra-ui/react';
import { ShoppingCart } from './shopping-cart';
import { useShoppingCartStore } from 'store/Module';

export function App() {
  const { items } = useShoppingCartStore();
  console.log('items', items);
  return (
    <ChakraProvider theme={theme}>
      <Stack>
        <Flex p="2">
          <Heading>Checkout</Heading>
        </Flex>
        <ShoppingCart basketList={items} />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
