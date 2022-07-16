import { motion, Variants } from "framer-motion";
import { Backdrop } from "@/components/core/Backdrop";

const animation: Variants = {
  init: {
    opacity: 0,
    scale: 0.5,
  },
  fadeIn: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  fadeOut: {
    opacity: 0,
    scale: 0.5,
  },
};

interface IModalProps {
  children: React.ReactNode;
  open: boolean;
  close?: () => void;
}

export const Modal = ({ children, open, close = () => {} }: IModalProps) => {
  return (
    <Backdrop open={open} close={close} className="grid place-items-center">
      <motion.div
        className="bg-neutral-400 shadow-md rounded-xl max-w-[calc(100%-2em)]"
        variants={animation}
        initial="init"
        animate={"fadeIn"}
        exit="fadeOut"
      >
        {children}
      </motion.div>
    </Backdrop>
  );
};
