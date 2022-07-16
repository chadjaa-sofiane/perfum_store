import { useParams, useNavigate } from "react-router-dom";
import { Drawer } from "@/components/core";
import { ProductDrawerContent } from "./ProductDrawerContent";

export const ProductDrawer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const open = id !== undefined;
  const handleClose = () => {
    navigate("/shop");
  };
  return (
    <Drawer open={open} close={handleClose}>
      {id && <ProductDrawerContent id={parseInt(id)} />}
    </Drawer>
  );
};
