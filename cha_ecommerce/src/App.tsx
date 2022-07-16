import AppRouter from "@/pages/Router";
import { ShoppingBag } from "@/components/ShoppingBag";

const App = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans bg-neutral-400">
      <AppRouter />
      <ShoppingBag />
    </div>
  );
};

export default App;
