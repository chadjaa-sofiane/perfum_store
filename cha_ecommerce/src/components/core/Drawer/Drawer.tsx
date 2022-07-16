import { motion, Variants } from "framer-motion";
import { Backdrop } from "@/components/core/Backdrop";

type Direction = "left" | "right";

interface DrawerProps {
  children: React.ReactNode;
  direction?: Direction;
  open: boolean;
  close?: () => void;
}

const animation = (directio: Direction): Variants => ({
  init: {
    x: directio === "left" ? "100%" : "-100%",
  },
  fadeIn: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  fadeOut: {
    x: directio === "left" ? "100%" : "-100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
});

export const Drawer = ({
  children,
  direction = "right",
  open,
  close = () => {},
}: DrawerProps) => {
  return (
    <Backdrop open={open} close={close}>
      <motion.div
        variants={animation(direction)}
        initial="init"
        animate={"fadeIn"}
        exit="fadeOut"
        className={`
        w-full h-full bg-neutral-400 sm:w-3/4
        overflow-auto
        ${direction === "left" ? "left-0" : "right-0"}
        transition-transform duration-500 ease-out 
      `}
      >
        <div className="sm:hidden flex justify-end p-4 cursor-pointer font-bold text-2xl">
          <span onClick={close}> X </span>
        </div>
        {open && children}
      </motion.div>
    </Backdrop>
  );
};
