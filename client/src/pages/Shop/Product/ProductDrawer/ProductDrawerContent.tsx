import { useSelector } from "react-redux";
import { State } from "@/store/store";
import { useNavigate } from "react-router-dom";
import { Title3 } from "@/components/core";
import { Available } from "../Available";
import { Price } from "../Price";
import { ButtonsField } from "../ButtonsField";

interface ProductDrawerContentProps {
  id: number;
}

export const ProductDrawerContent = ({ id }: ProductDrawerContentProps) => {
  const product = useSelector((state: State) =>
    state.shop.products.find((i) => i.id === id)
  );

  const navigate = useNavigate();

  if (product === undefined) {
    navigate("/shop");
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 pt-16">
      <div className="flex-1 p-4">
        <div className="w-full aspect-square">
          <img
            className="w-full h-full"
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col p-4 gap-8">
        <Title3> {product.name} </Title3>
        <Available available={product.available} />
        <Price amount={product.price} />
        <p> {product.description} </p>
        <ButtonsField id={id} />
      </div>
    </div>
  );
};
