import { data, Product } from "@/utils/data/shop";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  count: number;
};

interface IInitialState {
  products: Product[];
  cart: CartItem[];
  cartTotal: number;
}

const initialState: IInitialState = {
  products: data,
  cart: [],
  cartTotal: 0,
};

const ShopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const item = state.products.find((i) => i.id === action.payload);
      if (!item) {
        return state;
      }
      state.cart.push({
        id: item.id,
        count: 1,
      });
    },
    increaseCount: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map((e) =>
        e.id === action.payload ? { ...e, count: e.count + 1 } : e
      );
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((e) => e.id !== action.payload);
    },
    removeAllFromCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, increaseCount, removeFromCart, removeAllFromCart } =
  ShopSlice.actions;
export default ShopSlice.reducer;
