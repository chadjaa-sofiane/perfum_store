import { useSelector } from "react-redux";
import { State } from "@/store/store";
import {
  AddToCartButton,
  RemoveFromCartButton,
} from "@/components/ProductButtons";

interface IButtonsFieldProps {
  id: number;
}

export const ButtonsField = ({ id }: IButtonsFieldProps) => {
  const inCart = useSelector(
    (state: State) => !!state.shop.cart.find((e) => e.id === id)
  );

  return (
    <div className="mt-auto">
      {!inCart ? <AddToCartButton id={id} /> : <RemoveFromCartButton id={id} />}
    </div>
  );
};
