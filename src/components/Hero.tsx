import { motion } from "framer-motion";
import { Search, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-cartagena.jpg";

const Hero = () => (
  <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
    <img
      src={heroImg}
      alt="Vista aérea de Cartagena, Colombia"
      className="absolute inset-0 h-full w-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="gradient-hero-overlay absolute inset-0" />

    <div className="relative z-10 flex h-full items-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="mb-4 inline-block rounded-full bg-secondary/90 px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            🌴 Temporada 2026 — Hasta 30% OFF
          </span>
          <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-primary-foreground md:text-7xl">
            Vive Colombia,
            <br />
            <span className="text-secondary">sin preocupaciones</span>
          </h1>
          <p className="mb-8 max-w-lg text-lg text-primary-foreground/80">
            Destinos únicos, experiencias auténticas y recuerdos para toda la vida.
            Tu próxima aventura comienza aquí.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/catalogo"
              className="inline-flex items-center justify-center gap-2 rounded-xl gradient-royal px-8 py-4 text-base font-semibold text-primary-foreground shadow-elevated transition-all hover:scale-[1.02]"
            >
              Explorar destinos <ChevronRight className="h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/10"
            >
              💬 Hablar con un asesor
            </a>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Stats bar */}
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md"
    >
      <div className="container mx-auto grid grid-cols-2 gap-4 px-6 py-5 md:grid-cols-4">
        {[
          { value: "50+", label: "Destinos" },
          { value: "10K+", label: "Viajeros felices" },
          { value: "4.9★", label: "Calificación" },
          { value: "24/7", label: "Soporte" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="text-xl font-bold text-primary md:text-2xl">{stat.value}</span>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Hero;
