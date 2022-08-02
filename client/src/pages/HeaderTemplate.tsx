import { Footer } from "@/components/Footer";
import { Header, Logo } from "@/components/Header";
import { Outlet } from "react-router-dom";

export const MainTemplate = ({ lightLogo }: { lightLogo?: boolean }) => {
  return (
    <>
      <Header logo={lightLogo && <Logo logoColor="light" />} />
      <Outlet />
      <Footer />
    </>
  );
};
