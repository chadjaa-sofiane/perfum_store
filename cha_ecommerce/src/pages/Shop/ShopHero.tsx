import { Title2, Text } from "@/components/core";

export const ShopHero = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full md:w-3/4 mx-auto my-16">
      <div className="flex-1 p-4 text-center">
        <Title2> Sopping Page </Title2>
        <div></div>
      </div>
      <div className="flex-1 p-4">
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </div>
    </div>
  );
};
