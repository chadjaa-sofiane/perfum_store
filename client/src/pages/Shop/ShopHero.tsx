import backgroundImage from "@/assets/images/shop-hero.jpg";
import { Title1 } from "@/components/core";

export const ShopHero = () => {
  return (
    <div className="relative w-full h-[40em] overflow-hidden flex p-8 items-center isolate">
      <img
        src={backgroundImage}
        className="absolute left-0 top-0 w-full h-full object-cover bg-center -z-20"
      />
      <div className="absolute inset-0 bg-gray-900 opacity-50 -z-10"></div>
      <div className="flex-1">
        <Title1 className="text-neutral-400"> explore the shop and find your personality  </Title1>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};
