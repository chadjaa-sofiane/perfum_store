import { SubTitle, Title1 } from "@/components/core";
import { SplitPanel } from "@/components/SplitPanel";

const Left = () => (
  <div className="h-full flex flex-col justify-center p-4">
    <Title1> explore what is better for your feet. </Title1>
    <SubTitle className="mt-8">
      our store contain all king of shoes for all sizes and shapes.
    </SubTitle>
  </div>
);

const Right = () => (
  <div className="flex flex-col items-center p-2">
    <div className="relative shadow-2xl shadow-secondary-400 w-44 h-44 right-16 md:right-32"></div>
    <div className="relative shadow-2xl shadow-secondary-400 mt-4 w-44 h-44 left-20 md:left-40"></div>
    <div className="relative shadow-2xl shadow-secondary-400 mt-4 w-44 h-44 right-5 md:right-10"></div>
  </div>
);

export const Hero = () => {
  return (
    <section className="h-fit">
      <SplitPanel className="pt-16" left={<Left />} right={<Right />} />;
    </section>
  );
};
