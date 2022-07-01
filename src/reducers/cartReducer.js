export const cartInitialState =
  JSON.parse(localStorage.getItem("@shop:cart")) || [];

export const cartReducer = (state, action) => {
  const { product } = action;

  switch (action.type) {
    case "ADD_CART":
      const newProduct = { ...product, id: state.length + 1 };
      product.id = state.length + 1;
      localStorage.setItem(
        "@shop:cart",
        JSON.stringify([...state, newProduct])
      );
      return [...state, product];
    case "REMOVE_CART":
      const newCart = state.filter((item) => item.id !== product.id);
      localStorage.setItem("@shop:cart", JSON.stringify(newCart));

      return newCart;

    default:
      return state;
  }
};
