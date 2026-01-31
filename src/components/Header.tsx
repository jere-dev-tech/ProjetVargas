import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* LOGO */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <a href="#inicio" className="text-white font-serif text-lg">
          Carpintería <span className="text-gold">Vargas</span>
        </a>
      </header>

      {/* HAMBURGER */}
      <HamburgerButton
        open={menuOpen}
        onToggle={() => setMenuOpen((v) => !v)}
      />

      {/* MENU */}
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Header;
