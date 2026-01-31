import { motion } from "framer-motion";

import cocinaImg from "../assets/servicios-mesada.jpg";
import placardImg from "../assets/servicios-mesagrande.jpg";
import banosImg from "../assets/servicios-mesa.jpg";
import livingImg from "../assets/hero-sofa.jpg"; // reutilizamos el sillón

const services = [
  {
    title: "Cocinas",
    description:
      "Diseño y fabricación de amoblamientos a medida que optimizan el espacio y reflejan tu estilo.",
    image: cocinaImg,
    tags: ["Diseño 3D", "Materiales Premium", "Instalación Profesional"],
  },
  {
    title: "Placards y Vestidores",
    description:
      "Soluciones de guardado funcionales y elegantes para aprovechar cada centímetro.",
    image: placardImg,
    tags: ["Organización Inteligente", "Iluminación LED", "Acabados de Lujo"],
  },
  {
    title: "Baños",
    description:
      "Mobiliario resistente y sofisticado, pensado para espacios húmedos con diseño contemporáneo.",
    image: banosImg,
    tags: ["Materiales Resistentes", "Diseño Moderno", "Máxima Durabilidad"],
  },
  {
    title: "Comedores y Livings",
    description:
      "Piezas únicas que aportan calidez, diseño y personalidad a tus espacios sociales.",
    image: livingImg,
    tags: ["Diseño Exclusivo", "Maderas Nobles", "Terminaciones Artesanales"],
  },
];

const ServicesSection = () => {
  return (
    <section
      id="servicios"
      className="bg-[#faf8f3] py-28 px-6 text-dark"
    >
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">
          Nuestros Servicios
        </h2>
        <span className="block w-12 h-[2px] bg-gold mx-auto mb-6" />
        <p className="text-dark/70">
          Transformamos espacios con muebles a medida, combinando diseño,
          funcionalidad y la calidad de la madera.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative rounded-3xl overflow-hidden group h-[420px] md:h-[460px]"

          >
            {/* Imagen */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Contenido */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="font-serif text-2xl mb-2">
                {service.title}
              </h3>
              <p className="text-white/80 text-sm mb-4">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* CTA inferior */}
{/* CTA inferior */}
<div className="text-center mt-20">
  <a
    href="#contacto"
    className="cta-link text-sm"
  >
    <span>¿Tenés un proyecto en mente?</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="cta-icon"
    >
      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
  </a>
</div>

    </section>
  );
};

export default ServicesSection;
