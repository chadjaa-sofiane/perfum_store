import { useDispatch } from "react-redux";
import { Button } from "@/components/core";
import {
  addToCart as addToCartAction,
  removeFromCart as removeFromCartAction,
  removeAllFromCart as removeAllFromCartAction,
} from "@/store/shop";
import { useNavigate } from "react-router-dom";

interface IButtonProps {
  id: number;
}

export const RemoveFromCartButton = ({ id }: IButtonProps) => {
  const dispatch = useDispatch();

  const removeFromCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(removeFromCartAction(id));
  };

  return <Button onClick={removeFromCart}> remove from cart </Button>;
};

export const AddToCartButton = ({ id }: IButtonProps) => {
  const dispatch = useDispatch();

  const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(addToCartAction(id));
  };

  return (
    <Button color="dark" onClick={addToCart}>
      Add To Cart
    </Button>
  );
};

export const RemoveAllFromCartButton = () => {
  const dispatch = useDispatch();

  const removeAllFromCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(removeAllFromCartAction());
  };
  return <Button onClick={removeAllFromCart}> Remove All </Button>;
};

export const BuyProductButton = () => {
  const navigate = useNavigate();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate("/cart/buyProduct");
  };

  return (
    <Button onClick={onClick} color="dark">
      Buy Now
    </Button>
  );
};
