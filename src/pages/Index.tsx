import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import TourCard from "@/components/TourCard";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tours } from "@/data/tours";

const featuredTours = tours.filter((t) => t.featured);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />

    {/* Featured tours */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Destacados
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Experiencias que no te puedes perder
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTours.map((tour, i) => (
            <TourCard key={tour.id} tour={tour} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-8 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Ver todos los destinos →
          </Link>
        </div>
      </div>
    </section>

    <TrustBadges />
    <Testimonials />

    {/* CTA */}
    <section className="gradient-royal py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-5xl">
            ¿Listo para tu próxima aventura?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-primary-foreground/80">
            Déjanos diseñar el viaje perfecto para ti. Sin preocupaciones, solo experiencias increíbles.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/catalogo"
              className="rounded-xl bg-secondary px-8 py-4 font-semibold text-secondary-foreground transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              Explorar destinos
            </Link>
            <a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-primary-foreground/30 px-8 py-4 font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              💬 WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    <FAQ />
    <Footer />
  </div>
);

export default Index;
