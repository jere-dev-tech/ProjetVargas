type HamburgerButtonProps = {
  open: boolean;
  onToggle: () => void;
};

const HamburgerButton = ({ open, onToggle }: HamburgerButtonProps) => {
  return (
    <button
      onClick={onToggle}
      aria-label="Menú"
      className="
        fixed top-4 right-4
        z-[100]                 /* 🔥 SIEMPRE ARRIBA */
        w-12 h-12
        flex items-center justify-center
      "
    >
      <span className="relative w-7 h-7">
        {/* TOP */}
        <span
          className={`
            absolute left-0 top-1
            w-full h-[2px] bg-white
            transition-all duration-500
            ${open ? "rotate-45 top-3 bg-red-500" : ""}
          `}
        />
        {/* MID */}
        <span
          className={`
            absolute left-0 top-3
            w-full h-[2px] bg-white
            transition-all duration-300
            ${open ? "opacity-0" : ""}
          `}
        />
        {/* BOTTOM */}
        <span
          className={`
            absolute left-0 top-5
            w-full h-[2px] bg-white
            transition-all duration-500
            ${open ? "-rotate-45 top-3 bg-red-500" : ""}
          `}
        />
      </span>
    </button>
  );
};

export default HamburgerButton;
