import { StyledCartCard } from "./styles";
import formatValue from "../../utils/formatValue";
import { useContext } from "react";
import { Context } from "../../contexts/Context";
import { toast } from "react-toastify";

const CartCard = ({ id, name, img, price }) => {
  const { dispatch } = useContext(Context);

  const product = {
    id,
    name,
    img,
    price,
  };

  const handleRemove = () => {
    dispatch({ type: "REMOVE_CART", product });
    toast.success("Removido do carrinho");
  };

  return (
    <StyledCartCard>
      <section className="image">
        <img src={img} alt={name} />
      </section>
      <section className="description">
        <p>{name}</p>
      </section>
      <section className="extreme">
        <span>{formatValue(price)}</span>
        <div className="removeArea">
          <button onClick={handleRemove}>Remover</button>
        </div>
      </section>
    </StyledCartCard>
  );
};

export default CartCard;
