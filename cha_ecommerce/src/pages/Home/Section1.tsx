import { Title3, Text } from "@/components/core";
import { SplitPanel } from "@/components/SplitPanel";

export const Section1 = () => {
  return <SplitPanel className="py-16" left={<SectionImage />} right={<SectionContent />} />;
};

const SectionImage = () => {
  return (
    <div className="w-full aspect-video p-8 sm:translate-x-16">
      <img
        className="w-full h-full"
        src="https://picsum.photos/200/300"
        alt="random image"
      />
    </div>
  );
};

const SectionContent = () => {
  return (
    <div className="w-full h-full pl-20 flex justify-center flex-col gap-4">
      <Title3> sofiane is king of the world </Title3>
      <Text>
        sofiane is king the world, and he will delete mokips from exestinse
      </Text>
    </div>
  );
};
