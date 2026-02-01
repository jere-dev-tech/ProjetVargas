import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
        `}
      >
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#inicio"
            className={`
              font-serif text-lg transition-colors
              ${scrolled ? "text-dark" : "text-white"}
            `}
          >
            Carpintería <span className="text-gold">Vargas</span>
          </a>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`
                  text-sm transition-colors
                  ${scrolled
                    ? "text-dark hover:text-gold"
                    : "text-white/80 hover:text-white"}
                `}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA DESKTOP */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/5491140852513"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                         text-sm font-medium bg-emerald-500 text-white"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            <a
              href="tel:1140852513"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                         text-sm font-medium bg-gold text-dark"
            >
              <Phone className="w-4 h-4" />
              Llamar
            </a>
          </div>
        </div>
      </header>

      {/* HAMBURGER MOBILE (SIEMPRE ARRIBA) */}
      <div className="lg:hidden">
        <HamburgerButton
          open={menuOpen}
          onToggle={() => setMenuOpen((v) => !v)}
          dark={scrolled}   // 👈 CLAVE: cambia color cuando el navbar es blanco
        />
      </div>

      {/* MOBILE MENU */}
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Header;
