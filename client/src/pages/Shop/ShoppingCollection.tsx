import { ProductCard } from "./Product";
import { State } from "@/store/store";
import { CATEGORIES } from "@/utils/data/shop";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export const ShoppingCollection = () => {
  const data = useSelector((state: State) => state.shop.products);
  const { search } = useLocation();
  const navigate = useNavigate();
  const catagory = new URLSearchParams(search).get("catagory") || CATEGORIES[0];

  useEffect(() => {
    if (!CATEGORIES.includes(catagory)) {
      navigate(`?catagory=${CATEGORIES[0]}`);
    }
  }, [catagory]);

  return (
    <div className="grid p-4 gap-8 grid-cols-1 lg:grid-cols-2 ">
      {data.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};
