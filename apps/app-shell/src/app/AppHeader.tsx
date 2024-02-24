import { Header } from '@ebuy/ui';
import { useContext } from 'react';
import { useShoppingCartStore } from 'store/Module';
import { LikeContext } from 'store/Module';

export const AppHeader = () => {
  const { items } = useShoppingCartStore();
  const { likes, setLikes } = useContext<any>(LikeContext);
  return (
    <Header
      cartItemsCount={items.length}
      likesCount={likes}
      setLikes={() => setLikes(likes+1)}
    />
  );
};
