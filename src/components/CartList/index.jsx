import CartCard from "../CartCard";
import InfoCart from "../InfoCart";
import { StyledCartList } from "./styles";

import { useContext } from "react";
import { Context } from "../../contexts/Context";

const CartList = () => {
  const {
    state: { cart },
  } = useContext(Context);

  return (
    <StyledCartList>
      <section className="vitrine">
        <div className="head">
          <h2>Produto</h2>
          <h2>Preço</h2>
        </div>
        {cart.map((product) => (
          <CartCard
            key={product.id}
            id={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
          />
        ))}
      </section>
      <InfoCart />
    </StyledCartList>
  );
};

export default CartList;
