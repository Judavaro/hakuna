import { motion } from "framer-motion";
import { MapPin, Star, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Tour } from "@/data/tours";

import heroCartagena from "@/assets/hero-cartagena.jpg";
import tourCocora from "@/assets/tour-cocora.jpg";
import tourTayrona from "@/assets/tour-tayrona.jpg";
import tourCristales from "@/assets/tour-cristales.jpg";
import tourMachupicchu from "@/assets/tour-machupicchu.jpg";
import tourSanandres from "@/assets/tour-sanandres.jpg";

const imageMap: Record<string, string> = {
  "hero-cartagena": heroCartagena,
  "tour-cocora": tourCocora,
  "tour-tayrona": tourTayrona,
  "tour-cristales": tourCristales,
  "tour-machupicchu": tourMachupicchu,
  "tour-sanandres": tourSanandres,
};

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(price);

interface TourCardProps {
  tour: Tour;
  index?: number;
}

const TourCard = ({ tour, index = 0 }: TourCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <Link
      to={`/tour/${tour.id}`}
      className="group block overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageMap[tour.image]}
          alt={tour.title}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        {tour.originalPrice && (
          <span className="absolute left-3 top-3 rounded-full gradient-sunset px-3 py-1 text-xs font-bold text-secondary-foreground">
            {Math.round((1 - tour.price / tour.originalPrice) * 100)}% OFF
          </span>
        )}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-primary-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-sm font-medium">{tour.location}, {tour.country}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="mb-1 font-display text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
          {tour.title}
        </h3>
        <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{tour.shortDescription}</p>

        <div className="mb-4 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
            {tour.rating} ({tour.reviews})
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {tour.duration}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-3">
          <div>
            {tour.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">{formatPrice(tour.originalPrice)}</span>
            )}
            <p className="text-lg font-bold text-primary">{formatPrice(tour.price)}</p>
            <span className="text-xs text-muted-foreground">por persona</span>
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
            Ver más <ChevronRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default TourCard;
