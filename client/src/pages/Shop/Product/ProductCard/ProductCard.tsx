import { Product } from "@/utils/data/shop";
import { useNavigate } from "react-router-dom";
import { Title3 } from "@/components/core";
import { Available } from "../Available";
import { Price } from "../Price";
import { ButtonsField } from "../ButtonsField";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, image, available } = product;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${id}`);
  };

  return (
    <div
      className="flex flex-col sm:flex-row gap-4 cursor-pointer shadow-md"
      onClick={handleClick}
    >
      <div className="flex-1 flex sm:w-1/2 items-center">
        <img src={image} alt={name} className="w-full aspect-square" />
      </div>
      <div className="flex-1 p-4 flex flex-col gap-2">
        <Title3> {name} </Title3>
        <Available available={available} />
        <Price amount={price} />
        <ButtonsField id={id} />
      </div>
    </div>
  );
};
