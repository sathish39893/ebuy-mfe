import { SimpleGrid } from '@chakra-ui/react';
import { PRODUCT_LIST_MOCKS } from '@ebuy/mocks';
import { ProductCard } from './product-card';
export function ProductList() {
  return (
    <SimpleGrid
      spacing={4}
      p="2"
      templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
    >
      {PRODUCT_LIST_MOCKS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
}
export default ProductList;
