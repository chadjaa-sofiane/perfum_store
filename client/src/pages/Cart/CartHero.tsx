import { Button } from "@/components/core/Button";
import { Title2, SubTitle2, Text } from "@/components/core/TypoGraphy";
import { getPrice } from "@/helpers/getPrice";
import { State } from "@/store/store";
import { useSelector } from "react-redux";

export const CartHero = () => {
  const { count, total } = useSelector((state: State) => ({
    count: state.shop.cart.length,
    total: state.shop.cart.reduce((acc, i) => {
      const product = state.shop.products.find((p) => p.id === i.id);
      return acc + (product ? product.price : 0);
    }, 0),
  }));

  return (
    <div className="flex flex-col sm:flex-row mx-auto w-full md:w-3/4 shadow-md my-16">
      <div className="flex-1 text-center p-4">
        <Title2> The Cart </Title2>
      </div>
      <div className=" flex-1 flex flex-col p-4 gap-4">
        <Text> Details: </Text>
        <SubTitle2>number of items : {count}</SubTitle2>
        <SubTitle2> Total : {getPrice(total)}</SubTitle2>
        <div className="mt-auto">
            <Button color="dark"> Buy All </Button>
        </div>
      </div>
    </div>
  );
};
