import { StyledHomeCard } from "./styles";
import formatValue from "../../utils/formatValue";
import { useContext } from "react";
import { Context } from "../../contexts/Context";
import { toast } from "react-toastify";

const HomeCard = ({ name, img, price }) => {
  const { dispatch } = useContext(Context);

  const product = {
    name,
    img,
    price,
  };

  const handleAdd = () => {
    dispatch({ type: "ADD_CART", product });
    toast.success("Adicionado ao Carrinho");
  };

  return (
    <StyledHomeCard>
      <section className="image">
        <img src={img} alt={name} />
      </section>

      <section className="info">
        <p>{name}</p>
        <span>{formatValue(price)}</span>
        <button onClick={handleAdd}>Adicionar ao carrinho</button>
      </section>
    </StyledHomeCard>
  );
};

export default HomeCard;
