import { Outlet } from "react-router-dom";
import { Container, Wrapper } from "@/components/core";
import { ShoppingCollection } from "./ShoppingCollection";
import { ShopHero } from "./ShopHero";

export const Shop = () => {
  return (
    <>
      <Wrapper className="mt-16">
        <ShopHero />
      </Wrapper>
      <Wrapper>
        <Container>
          <ShoppingCollection />
          <Outlet />
        </Container>
      </Wrapper>
    </>
  );
};
