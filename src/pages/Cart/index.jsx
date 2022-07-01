import CartList from "../../components/CartList";
import { StyledCart } from "./styles";
import { Redirect } from "react-router-dom";

import { useContext } from "react";
import { Context } from "../../contexts/Context";

const Cart = () => {
  const {
    state: { cart },
  } = useContext(Context);

  if (cart.length < 1) {
    return <Redirect to="/" />;
  }

  return (
    <StyledCart>
      <CartList />
    </StyledCart>
  );
};

export default Cart;
