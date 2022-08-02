import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { Cart } from "./Cart";
import { Home } from "./Home";
import { Shop, ProductDrawer } from "./Shop";
import { MainTemplate } from "./HeaderTemplate";
import { BuyProductModal } from "./Shop/buyProductModal";

const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route element={<MainTemplate lightLogo />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<MainTemplate />}>
          <Route path="/shop" element={<Shop />}>
            <Route path=":id" element={<ProductDrawer />} />
          </Route>
          <Route path="/cart" element={<Cart />}>
            <Route path="buyProduct" element={<BuyProductModal />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
