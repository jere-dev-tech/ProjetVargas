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
  { label: "Contacto", href: "#contacto" },
];

const MobileMenu = ({ open, onClose }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* OVERLAY */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-[80]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* PANEL */}
          <motion.aside
            className="
              fixed top-0 right-0
              h-full w-[85%] max-w-sm
              bg-[#111]
              z-[90]
              px-6 py-10
              flex flex-col
            "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <nav className="flex flex-col gap-6 mt-16">
              {items.map((i) => (
                <a
                  key={i.label}
                  href={i.href}
                  onClick={onClose}
                  className="text-lg text-white font-medium"
                >
                  {i.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3">
              <a className="bg-emerald-500 py-3 rounded-full text-white flex justify-center gap-2">
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a className="bg-gold py-3 rounded-full text-dark flex justify-center gap-2">
                <Phone size={18} /> Llamar
              </a>
              <p className="text-center text-sm text-white/50 mt-4">
                Muebles de calidad desde 1980
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
