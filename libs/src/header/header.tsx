import { Link } from 'react-router-dom';
import { Box, Button, Flex, Icon, Spacer, Text } from '@chakra-ui/react';
import { MdOutlineShoppingCart } from 'react-icons/md';

export interface HeaderProps {
  cartItemsCount: number;
}

interface NavItem {
  href: string;
  label: string;
}

const MENU_ITEMS: Array<NavItem> = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/catalog',
    label: 'Catalog',
  },
  {
    href: '/checkout',
    label: 'Checkout',
  },
];
const MenuItems = () => {
  return MENU_ITEMS.map((item) => (
    <Button>
      <Link to={item.href}>{item.label}</Link>
    </Button>
  ));
};
export function Header(props: HeaderProps) {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="4" p="2">
      <Box p="2">
        <Flex alignItems="center" gap="2">
          <MenuItems />
        </Flex>
      </Box>
      <Spacer />
      <Text as='sub' color='tomato'>{props.cartItemsCount}</Text>
      <Icon as={MdOutlineShoppingCart} w={8} h={8} color="teal.500"></Icon>
    </Flex>
  );
}

export default Header;
