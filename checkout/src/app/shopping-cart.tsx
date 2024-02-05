import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

export const ShoppingCart = (basketListData: any) => {
  if (!basketListData) return <Text>Unable to fetch shopping cart data</Text>;
  
  const { basketList } = basketListData || {};
  
  return (
    <TableContainer>
      <Table variant="striped" size="lg">
        <TableCaption>Shopping Cart Items</TableCaption>
        <Thead>
          <Tr>
            <Th>Items</Th>
            <Th>Amount</Th>
            <Th isNumeric>Quantity</Th>
            <Th isNumeric>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {basketList.length > 0  ?
            basketList?.map((basketItem: any) => (
              <Tr>
                <Td>{basketItem?.title}</Td>
                <Td>{basketItem?.title}</Td>
                <Td isNumeric>{basketItem?.quantity || 0}</Td>
                <Td isNumeric>
                  {basketItem?.price * (basketItem?.quantity || 0) || '-'}
                </Td>
              </Tr>
            )): <Tr><Td>No Data found</Td></Tr>}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
