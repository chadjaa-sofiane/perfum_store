interface IBackdropProps {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Backdrop = ({
  children,
  open,
  close = () => {},
  className = "",
}: IBackdropProps) => {
  return open ? (
    <div className={`fixed inset-0 isolate z-10 ${className}`}>
      {children}
      <div
        onClick={close}
        className={`absolute bg-primary-400 inset-0 opacity-25 -z-10 cursor-pointer `}
      />
    </div>
  ) : null;
};
