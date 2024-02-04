import { Link } from 'react-router-dom';
import { Box, Button, Flex, Icon, Spacer, Text } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface HeaderProps {}

interface NavItem {
  href: string;
  label: string;
}

const MENU_ITEMS: Array<NavItem> = [
  {
    href:'/',
    label: 'Home'
  },
  {
    href:'/catalog',
    label: 'Catalog'
  },
  {
    href:'/checkout',
    label: 'Checkout'
  },
]
const MenuItems = () => {
return MENU_ITEMS.map((item) => (<Button><Link to={item.href}>{item.label}</Link></Button>))
}
export function Header(props: HeaderProps) {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
    <Box p='2'>
      <Flex>
        <MenuItems />
      </Flex>
    </Box>
    <Spacer />
      <Button colorScheme='teal'>00</Button>
  </Flex>
  );
}

export default Header;
