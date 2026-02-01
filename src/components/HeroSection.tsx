import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import heroSofa from "../assets/hero-sofa.jpg";
import hero1 from "../assets/servicios-mesa.jpg";
import hero2 from "../assets/servicios-mesada.jpg";
import hero3 from "../assets/servicios-mesagrande.jpg";


const slides = [heroSofa, hero1, hero2, hero3];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative overflow-hidden
        min-h-[110vh] md:min-h-screen
      "
    >
      {/* ===== BACKGROUND SLIDER ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={activeSlide}
            src={slides[activeSlide]}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay fijo */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* ===== TEXTO VERTICAL (desktop only) ===== */}
      <div className="absolute left-10 2xl:left-28 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <div className="vertical-label">
          <span className="vertical-text">DESDE 1979</span>
          <motion.span
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            style={{ transformOrigin: "center" }}
            className="vertical-line"
          />
        </div>
      </div>

      {/* ===== CONTENIDO ===== */}
<div
  className="
    relative z-20
    flex min-h-[110vh] md:min-h-screen
    items-center justify-center
    px-6 text-center text-white
    -translate-y-10 md:translate-y-0
  "
>

        <div className="max-w-4xl flex flex-col gap-6 md:gap-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Artesanía de Excelencia
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Muebles de Calidad{" "}
            <span className="text-amber-400 italic">para tu Hogar</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl text-white/80 mt-2 md:mt-4"
          >
            Diseño exclusivo y fabricación artesanal con más de 46 años de experiencia
          </motion.p>

          {/* CTAs */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="mt-6 md:mt-10 flex flex-col items-center md:flex-row md:justify-center gap-4"
>

            <a href="#contacto" className="btn-cta-primary group">
              Solicitar Presupuesto
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a href="#portafolio" className="btn-cta-secondary">
              Ver Proyectos
            </a>
          </motion.div>
        </div>
      </div>

{/* ===== DOTS ===== */}
<div
  className="
    absolute
    bottom-44        /* 📱 mobile: más arriba */
    md:bottom-40     /* 🖥️ desktop */
    left-1/2
    -translate-x-1/2
    z-20
    flex gap-6
  "
>
  {slides.map((_, i) => (
    <button
      key={i}
      onClick={() => setActiveSlide(i)}
      className={`slider-dot ${activeSlide === i ? "active" : ""}`}
    />
  ))}
</div>



{/* ===== SCROLL ===== */}
<div
  className="
    absolute
    bottom-20
    md:bottom-16
    left-1/2
    -translate-x-1/2
    z-[60]
    flex flex-col
    items-center
    gap-4
    text-white/80
    pointer-events-auto
  "
>
<a
  href="#servicios"
  className="text-xs tracking-widest uppercase"
>
  DESCUBRIR
</a>

<a href="#servicios" className="scroll-mouse">
  <span className="scroll-wheel"></span>
</a>

</div>


    </section>
  );
};

export default HeroSection;
