interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  color?: "light" | "dark";
  size?: "small" | "medium" | "large";
}

export const Button = ({
  children,
  color = "light",
  size = "medium",
  className,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={`
        ${className}
        ${
          color === "light"
            ? "bg-neutral-400 text-primary-400"
            : "bg-primary-400 text-neutral-400"
        }
        
        ${size === "small" ? "text-xl sm:text-lg" : ""}
        ${size === "medium" ? "text-2xl sm:text-xl" : ""}
        ${size === "large" ? "text-4xl sm:text-3xl" : ""}
        
        w-fit py-2 px-4 shadow-sm shadow-primary-100 uppercase font-bold hover:opacity-75
        `}
    >
      {children}
    </button>
  );
};
