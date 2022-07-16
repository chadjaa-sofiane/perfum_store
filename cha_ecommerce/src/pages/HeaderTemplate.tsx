import { Footer } from "@/components/Footer";
import { Header, IHeaderProps } from "@/components/Header";
import { Outlet } from "react-router-dom";

interface IHederTemplateProps extends IHeaderProps {}

export const HeaderTemplate = ({
  logoColor = "dark",
}: IHederTemplateProps) => {
  return (
    <>
      <Header logoColor={logoColor} />
      <Outlet />
      <Footer />
    </>
  );
};
