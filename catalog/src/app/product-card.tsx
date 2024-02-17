import {
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { productListItem } from '@ebuy/mocks';
import { MdAdd, MdRemove } from 'react-icons/md';
import { useShoppingCartStore } from 'store/Module';

export const ProductCard = ({ product }: { product: productListItem }) => {
  const { items, increment, decrement } = useShoppingCartStore();
  const quantity = items.find((el:any) => el.id === product?.id)?.quantity || 0;
  return (
    <Card maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title}</Heading>
          <Text>{product?.description}</Text>
          <Text color="blue.500" fontSize="xl">
            ${product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider color="blue.600" />
      <CardFooter>
        <ButtonGroup spacing="2">
          <IconButton aria-label="remove" icon={<MdAdd />} color="red.500" onClick={() => increment(product)} />
          <Button variant="ghost" colorScheme="blue">
            {quantity}
          </Button>
          <IconButton
            aria-label="remove"
            icon={<MdRemove />}
            color="green.600"
            onClick={() => decrement(product)}
          />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
