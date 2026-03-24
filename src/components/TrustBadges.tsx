import { motion } from "framer-motion";
import { Shield, CreditCard, Headphones, Award, RefreshCw, MapPin } from "lucide-react";

const badges = [
  { icon: Shield, title: "Viajes seguros", desc: "Seguro de viaje incluido" },
  { icon: CreditCard, title: "Pago seguro", desc: "Encriptación SSL 256-bit" },
  { icon: Headphones, title: "Soporte 24/7", desc: "WhatsApp y teléfono" },
  { icon: Award, title: "Mejor valorados", desc: "4.9★ en Google Reviews" },
  { icon: RefreshCw, title: "Cancelación flexible", desc: "Gratis hasta 15 días antes" },
  { icon: MapPin, title: "Expertos locales", desc: "Guías certificados" },
];

const TrustBadges = () => (
  <section className="py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
        {badges.map((badge, i) => (
          <motion.div
            key={badge.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <badge.icon className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold text-foreground">{badge.title}</p>
            <p className="text-xs text-muted-foreground">{badge.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
