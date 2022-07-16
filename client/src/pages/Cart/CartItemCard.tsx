import { Title3, Text } from "@/components/core/TypoGraphy";
import {
  BuyProductButton,
  RemoveFromCartButton,
} from "@/components/ProductButtons";
import { State } from "@/store/store";
import { useSelector } from "react-redux";
import { Price } from "../Shop/Product/Price";

interface ICartItemCardProps {
  id: number;
}

export const CartItemCard = ({ id }: ICartItemCardProps) => {
  const product = useSelector((state: State) =>
    state.shop.products.find((product) => product.id === id)
  );
  if (!product) return null;
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-3/4 shadow-md">
      <div className="flex-1 h-72">
        <img className="w-full h-full" src={product.image} alt={product.name} />
      </div>
      <div className="flex-1 flex flex-col p-4 gap-4">
        <Title3> {product.name} </Title3>
        <Text> {product.description} </Text>
        <Price amount={product.price} />
        <div className="mt-auto flex gap-4">
          <RemoveFromCartButton id={id} />
          <BuyProductButton />
        </div>
        {!product.available && <p> this product is not available now </p>}
      </div>
    </div>
  );
};
