import { Link } from 'react-router-dom';
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  IconButton,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';

export interface HeaderProps {
  cartItemsCount: number;
  likesCount: number;
  setLikes: () => void;
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
      <Text as="sub" color="tomato">
        {props.likesCount}
      </Text>
      <IconButton
        icon={<FcLike />}
        aria-label="likes"
        isRound={true}
        variant="ghost"
        fontSize="24px"
        onClick={props.setLikes}
      />
      <Avatar bg='teal.500' icon={<MdOutlineShoppingCart fontSize="1.5rem" />}>
        <AvatarBadge boxSize="1.25em" bg="green.500">
          <Text fontSize="xs">{props.cartItemsCount}</Text>
        </AvatarBadge>
      </Avatar>
    </Flex>
  );
}

export default Header;
