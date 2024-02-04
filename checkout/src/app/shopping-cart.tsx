import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

export const ShoppingCart = (basketListData: any) => {
  const { basketList } = basketListData;
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
          {basketList.map((basketItem: any) => (
            <Tr>
              <Td>{basketItem.title}</Td>
              <Td>{basketItem.title}</Td>
              <Td isNumeric>{basketItem.quantity || 0}</Td>
              <Td isNumeric>{basketItem.price * basketItem.quantity || '-'}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
