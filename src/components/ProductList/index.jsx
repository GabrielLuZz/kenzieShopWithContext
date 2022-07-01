import HomeCard from "../HomeCard";
import { StyledProductList } from "./styles";

import { useContext } from "react";
import { Context } from "../../contexts/Context";

const ProductList = () => {
  const {
    state: { products },
  } = useContext(Context);

  return (
    <StyledProductList>
      {products.map((product) => (
        <HomeCard
          key={product.id}
          name={product.name}
          img={product.img}
          price={product.price}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
