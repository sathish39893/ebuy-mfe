import {
  Button,
  Card,
  CardBody,
  CardHeader,
  ChakraProvider,
  Container,
  Heading,
  Text,
  theme,
} from '@chakra-ui/react';
import useLikeStore from 'store/Module';

export function App() {
  const { reset, count } = useLikeStore();
  return (
    <ChakraProvider theme={theme}>
      <Container p={5} m={5} maxW="2xl" bg="blue.600" centerContent>
        <Card>
          <CardHeader>
            <Heading size="md">Recommendations</Heading>
          </CardHeader>
          <CardBody>
            <Text as="h4">Recommendation goes here</Text>
            <Text as="p"> {count} people liked the recommendations</Text>
            <Button onClick={reset}>reset</Button>
          </CardBody>
        </Card>
      </Container>
    </ChakraProvider>
  );
}

export default App;
