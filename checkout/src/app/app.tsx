import { ChakraProvider, Container, Heading, Stack, theme } from '@chakra-ui/react';
import { ShoppingCart } from './shopping-cart';
import { PRODUCT_LIST_MOCKS } from '@ebuy/mocks';


export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack>
        <Container><Heading> Checkout </Heading></Container>
        <ShoppingCart basketList={PRODUCT_LIST_MOCKS} />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
