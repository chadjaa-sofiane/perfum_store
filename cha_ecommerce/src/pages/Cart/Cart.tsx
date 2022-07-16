import { Container } from "@/components/core/Container";
import { Wrapper } from "@/components/core/Wrapper";
import { Outlet } from "react-router-dom";
import { BuyProductModal } from "../Shop/buyProductModal";
import { CartHero } from "./CartHero";
import { CartItems } from "./CartItems";

export const Cart = () => {
  return (
    <Wrapper className="mt-16 flex-1">
      <Container>
        <CartHero />
        <CartItems />
        <Outlet />
      </Container>
    </Wrapper>
  );
};
