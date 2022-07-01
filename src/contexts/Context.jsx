import { createContext, useReducer } from "react";

import {
  productsInitialState,
  productsReducer,
} from "../reducers/productsReducer";

import { cartInitialState, cartReducer } from "../reducers/cartReducer";

const initialState = {
  products: productsInitialState,
  cart: cartInitialState,
};

export const Context = createContext({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state, action) => ({
  products: productsReducer(state.products, action),
  cart: cartReducer(state.cart, action),
});

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
