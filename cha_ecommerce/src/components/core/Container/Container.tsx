interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: Props) => {
  return (
    <div className={`m-0 container md:m-auto ${className}`}>{children}</div>
  );
};
