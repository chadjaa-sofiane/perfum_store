import { SubTitle2, SmallText } from "@/components/core";
import { Ingredients as IngredientsType } from "@/utils/data/shop";

interface IngredientsProps {
  ingredients: IngredientsType;
}

export const Ingredients = ({ ingredients }: IngredientsProps) => {
  return (
    <div className="cursor-pointer">
      <SubTitle2 className="text-secondary-400 shadow-sm w-fit p-1">
        Ingredients
      </SubTitle2>
      <div className="mt-4">
        <SmallText>background the notes </SmallText>
        <p className="text-primary-400">
          {ingredients.backgroundNotes?.join(", ")}
        </p>
      </div>
      <div className="mt-4">
        <SmallText> heart the notes </SmallText>
        <p className="text-primary-400">{ingredients.heartNotes?.join(", ")}</p>
      </div>
      <div className="mt-4">
        <SmallText> top the notes </SmallText>
        <p className="text-primary-400">{ingredients.topNotes?.join(", ")}</p>
      </div>
    </div>
  );
};
