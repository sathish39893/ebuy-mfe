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
import { useContext } from 'react';
import { LikeContext } from 'store/Module';
import { LikeContextProvider } from 'store/Module';

export function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { likes, setLikes } = useContext<any>(LikeContext);
  return (
    <ChakraProvider theme={theme}>
      <LikeContextProvider>
        <Card maxW="lg" size="md">
          <CardHeader>
            <Heading size="md">Recommendations</Heading>
          </CardHeader>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Text as="h4">Recommendation goes here</Text>
              <Text as="p"> {likes} people liked the recommendations</Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button onClick={() => setLikes(0)} colorScheme="blue">
              Reset
            </Button>
          </CardFooter>
        </Card>
      </LikeContextProvider>
    </ChakraProvider>
  );
}

export default App;
