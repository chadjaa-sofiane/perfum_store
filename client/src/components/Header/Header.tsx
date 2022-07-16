import { motion } from "framer-motion";
import { Container, Wrapper } from "@/components/core";
import { NavBar } from "./NavBar";

export interface IHeaderProps {
  logoColor?: "dark" | "light";
}

export const Header = ({ logoColor = "dark" }: IHeaderProps) => {
  return (
    <header className="absolute w-full z-10 top-0 left-0">
      <Wrapper className="bg-primary-400 md:bg-transparent">
        <Container className="flex px-2 py-4 md:px-2 md:py-4">
          <Logo logoColor={logoColor} />
          <NavBar />
        </Container>
      </Wrapper>
    </header>
  );
};

const Logo = ({ logoColor }: IHeaderProps) => {
  return (
    <motion.div
      className="w-full px-4 md:px-0 flex justify-betwen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <p
        className={`
          font-bold text-3xl font-Oldenburg text-neutral-400
          ${
            logoColor === "light"
              ? "md:text-neutral-400"
              : "md:text-primary-400"
          }
          
        `}
      >
        SofStore
      </p>
    </motion.div>
  );
};
