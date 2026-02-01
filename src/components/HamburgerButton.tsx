type HamburgerButtonProps = {
  open: boolean;
  onToggle: () => void;
  dark?: boolean;
};

const HamburgerButton = ({ open, onToggle, dark }: HamburgerButtonProps) => {
  return (
    <button
      aria-label="Menú"
      onClick={onToggle}
      className={`
        hamburger
        fixed top-4 right-4 z-[1000]
        w-10 h-10
        flex flex-col justify-center items-end gap-1.5
        ${open ? "checked" : ""}
        ${dark ? "dark" : ""}
      `}
    >
      <span className="line line-1" />
      <span className="line line-2" />
      <span className="line line-3" />
    </button>
  );
};

export default HamburgerButton;
