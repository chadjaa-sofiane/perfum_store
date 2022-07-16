import { motion, Variants } from "framer-motion";

interface Props {
  children: React.ReactNode;
  color?: "dark" | "light";
  split?: boolean;
  className?: string;
  animation?: Variants;
}

export const Wrapper = ({
  children,
  split = false,
  color = "light",
  className = "",
  animation,
}: Props) => (
  <div
    className={`
        ${className}
        relative w-full flex-1
        ${split ? "isolate" : ""}
        ${
          color === "dark"
            ? "bg-primary-400 text-neutral-400"
            : "bg-neutral-400 text-primary-400"
        }
        `}
  >
    {split && animation && color === "light" && (
      <motion.span
        className="block absolute w-0 h-full bg-primary-400 top-0 left-0 -z-10 md:w-1/2"
        variants={animation}
        initial="init"
        animate="fadeIn"
        exit="fadeOut"
      />
    )}
    {children}
  </div>
);
