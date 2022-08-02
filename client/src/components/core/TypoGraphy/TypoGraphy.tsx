interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Title1 = ({ children, className = " " }: Props) => (
  <h1 className={`font-bold text-7xl md:text-8xl ${className}`}>
    {" "}
    {children}{" "}
  </h1>
);

export const Title2 = ({ children, className }: Props) => (
  <h2 className={`font-bold text-5xl md:text-6xl ${className}`}>{children}</h2>
);

export const Title3 = ({ children, className }: Props) => (
  <h3 className={`font-bold text-3xl md:text-4xl ${className}`}>
    {" "}
    {children}{" "}
  </h3>
);

export const SubTitle = ({ children, className = "" }: Props) => (
  <p className={`text-2xl md:text-3xl opacity-60 ${className}`}> {children} </p>
);

export const SubTitle2 = ({ children, className = "" }: Props) => (
  <p className={`text-xl md:text-2xl opacity-60 ${className}`}> {children} </p>
);

export const Text = ({ children, className }: Props) => (
  <p className={`text-xl md:text-2xl ${className}`}> {children} </p>
);

export const SmallText = ({ children, className }: Props) => (
  <p className={`text-base md:text-xl ${className}`}> {children} </p>
);
