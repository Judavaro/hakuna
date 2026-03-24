import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/tours";

const Testimonials = () => (
  <section className="bg-muted py-20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Testimonios</span>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Lo que dicen nuestros viajeros
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl bg-card p-6 shadow-card"
          >
            <Quote className="mb-3 h-6 w-6 text-primary/30" />
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-3.5 w-3.5 fill-secondary text-secondary" />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-royal text-sm font-bold text-primary-foreground">
                {t.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.tour}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
