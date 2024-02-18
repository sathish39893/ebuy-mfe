import { productListItem } from '@ebuy/mocks';
import { create } from 'zustand';

export interface LikeCount {
  count: number;
  increment: () => void;
  reset: () => void;
}

export interface shoppingCartItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
}
export interface ShoppingCart {
  items: shoppingCartItem[];
  increment: (product: productListItem) => void;
  decrement: (product: productListItem) => void;
  reset: () => void;
}

export const useLikeStore = create<LikeCount>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set(() => ({ count: 0 })),
}));

export const useShoppingCartStore = create<ShoppingCart>((set) => ({
  items: [],
  increment: (product: productListItem) =>
    set((state) => {
      const itemFound = state.items.find((el) => el.id === product.id);
      if (itemFound) itemFound.quantity++;

      return {
        items: !itemFound
          ? [
              ...state.items,
              {
                id: product.id,
                quantity: 1,
                title: product.title,
                price: product.price,
              },
            ]
          : state.items,
      };
    }),
  decrement: (product: productListItem) =>
    set((state) => {
      const itemFound = state.items.find((el) => el.id === product.id);
      if (itemFound && itemFound.quantity === 0) {
        const indexFound = state.items.findIndex((el) => el.id === product.id);
        state.items.splice(indexFound, 1);
      }
      if (itemFound && itemFound.quantity > 0) itemFound.quantity--;

      return {
        items: state.items,
      };
    }),
  reset: () => set(() => ({ items: [] })),
}));
