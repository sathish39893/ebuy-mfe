
import { HStack } from '@chakra-ui/react';
import { PRODUCT_LIST_MOCKS } from '@ebuy/mocks';
import { ProductCard } from './product-card';
export function ProductList() {
  return (
    <HStack>
      {PRODUCT_LIST_MOCKS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </HStack>
  );
}
export default ProductList;