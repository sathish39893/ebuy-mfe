import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

export const ProductCard = (productData: any) => {
  const { product } = productData;
  return (
    <Card maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title}</Heading>
          <Text>{product.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="ghost" colorScheme="red">
            Remove
          </Button>
          <Button variant="ghost" colorScheme="blue">
            {0}
          </Button>
          <Button variant="solid" colorScheme="teal">
            Add
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
