import { motion, Variants } from "framer-motion";
import { Container } from "../core/Container";
import { Wrapper } from "../core/Wrapper";

interface IsplitPanelProps {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}

const leftAnimation: Variants = {
  init: {
    x: "-700px",
  },
  fadeIn: {
    x: 0,
    transition: {
      duration: 1
      ,
      ease: "easeInOut",
    },
  },
  fadeOut: {
    x: "-700px",
  },
};

const rightAnimation: Variants = {
  init: {
    opacity: 0,
  },
  fadeIn: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
  fadeOut: {
    opacity: 0,
  },
};

export const SplitPanel = ({ left, right, className = "" }: IsplitPanelProps) => {
  return (
    <Wrapper split animation={leftAnimation} className={className}>
      <Container className="flex flex-col md:flex-row">
        <motion.div
          className="flex-1 bg-primary-400 text-white"
          variants={leftAnimation}
          initial="init"
          animate="fadeIn"
          exit="fadeOut"
        >
          {left}
        </motion.div>
        <motion.div
          className="flex-1 bg-neutral-400 text-primary-400"
          variants={rightAnimation}
          initial="init"
          animate="fadeIn"
          exit="fadeOut"
        >
          {right}
        </motion.div>
      </Container>
    </Wrapper>
  );
};
