import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ChakraProvider,
  Heading,
  Stack,
  Text,
  theme,
} from '@chakra-ui/react';
import useLikeStore from 'store/Module';

export function App() {
  const { reset, count } = useLikeStore();
  return (
    <ChakraProvider theme={theme}>
      <Card maxW="lg" size="md">
        <CardHeader>
          <Heading size="md">Recommendations</Heading>
        </CardHeader>
        <CardBody>
          <Stack mt="6" spacing="3">
            <Text as="h4">Recommendation goes here</Text>
            <Text as="p"> {count} people liked the recommendations</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button onClick={reset} colorScheme="blue">
            Reset
          </Button>
        </CardFooter>
      </Card>
    </ChakraProvider>
  );
}

export default App;
