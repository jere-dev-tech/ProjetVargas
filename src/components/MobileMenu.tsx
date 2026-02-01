import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const items = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Contacto", href: "#contacto" },
];

const MobileMenu = ({ open, onClose }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* OVERLAY */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-[800]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* PANEL */}
          <motion.aside
            className="
              fixed top-0 right-0 z-[900]
              h-full w-[85%] max-w-sm
              bg-[#faf7f2]
              px-6 pt-20 pb-8
              flex flex-col
            "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            {/* LINKS */}
            <nav className="flex flex-col gap-5">
              {items.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    text-base font-medium text-dark
                    px-4 py-3 rounded-xl
                    ${i === 0 ? "bg-[#efe9df] text-[#9a7b3a]" : "hover:bg-[#efe9df]"}
                  `}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* SEPARATOR */}
            <div className="my-6 h-px w-full bg-black/10" />

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5491140852513"
                className="flex items-center justify-center gap-2 rounded-xl
                           bg-emerald-500 py-4 text-white font-medium"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

              <a
                href="tel:1140852513"
                className="flex items-center justify-center gap-2 rounded-xl
                           bg-[#9a7b3a] py-4 text-white font-medium"
              >
                <Phone size={18} />
                11 4085-2513
              </a>
            </div>

            {/* FOOTER */}
            <p className="mt-auto pt-6 text-center text-sm text-black/40">
              Muebles de calidad desde 1980
            </p>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
