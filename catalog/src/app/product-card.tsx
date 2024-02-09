import {
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Icon,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { MdAdd, MdRemove } from 'react-icons/md';

export const ProductCard = (productData: any) => {
  const { product } = productData;
  return (
    <Card maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title}</Heading>
          <Text>{product.description}</Text>
          <Text color="blue.500" fontSize="xl">
            ${product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider  color="blue.600" />
      <CardFooter>
        <ButtonGroup spacing="2">
          <IconButton aria-label="remove" icon={<MdAdd />} color="red.500" />
          <Button variant="ghost" colorScheme="blue">
            {0}
          </Button>
          <IconButton aria-label="remove" icon={<MdRemove />} color="green.600" />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
