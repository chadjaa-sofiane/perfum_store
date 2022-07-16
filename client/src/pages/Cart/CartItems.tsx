import { useSelector } from "react-redux";
import { State } from "@/store/store";
import { CartItemCard } from "./CartItemCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CartItems = () => {
  const cartItems = useSelector((state: State) => state.shop.cart);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/shop");
    }
  }, [cartItems.length]);

  return (
    <div className="flex flex-col items-center gap-8 my-8">
      {cartItems?.map((cartItem) => {
        return <CartItemCard key={cartItem.id} id={cartItem.id} />;
      })}
    </div>
  );
};
