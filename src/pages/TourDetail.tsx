import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Star, Clock, Check, ChevronLeft, Users, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tours } from "@/data/tours";

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

const TourDetail = () => {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === id);
  const [travelers, setTravelers] = useState(2);
  const [showCheckout, setShowCheckout] = useState(false);

  if (!tour) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Tour no encontrado</h1>
          <Link to="/catalogo" className="mt-4 inline-block text-primary hover:underline">← Volver al catálogo</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const total = tour.price * travelers;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero image */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={imageMap[tour.image]} alt={tour.title} className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="gradient-hero-overlay absolute inset-0" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-6">
            <Link to="/catalogo" className="mb-4 inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground">
              <ChevronLeft className="h-4 w-4" /> Volver al catálogo
            </Link>
            <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">{tour.title}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-primary-foreground/80">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {tour.location}, {tour.country}</span>
              <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-secondary text-secondary" /> {tour.rating} ({tour.reviews} reseñas)</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {tour.duration}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="mb-4 font-display text-2xl font-bold text-foreground">Descripción</h2>
              <p className="leading-relaxed text-muted-foreground">{tour.description}</p>
            </motion.div>

            <div>
              <h2 className="mb-4 font-display text-2xl font-bold text-foreground">Highlights</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {tour.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 rounded-lg bg-primary/5 px-4 py-3">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-display text-2xl font-bold text-foreground">Itinerario</h2>
              <div className="space-y-4">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="rounded-xl border border-border bg-card p-5">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full gradient-royal text-sm font-bold text-primary-foreground">
                        {day.day}
                      </span>
                      <h3 className="font-semibold text-card-foreground">{day.title}</h3>
                    </div>
                    <p className="pl-11 text-sm text-muted-foreground">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-display text-2xl font-bold text-foreground">Incluye</h2>
              <div className="flex flex-wrap gap-2">
                {tour.includes.map((item) => (
                  <span key={item} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-card-foreground">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="mb-4">
                {tour.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">{formatPrice(tour.originalPrice)}</span>
                )}
                <p className="text-3xl font-bold text-primary">{formatPrice(tour.price)}</p>
                <span className="text-sm text-muted-foreground">por persona</span>
              </div>

              <div className="mb-4 space-y-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-card-foreground">
                    <Calendar className="mr-1 inline h-4 w-4" /> Fecha de viaje
                  </label>
                  <input type="date" className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-card-foreground">
                    <Users className="mr-1 inline h-4 w-4" /> Viajeros
                  </label>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setTravelers(Math.max(1, travelers - 1))} className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground hover:bg-muted">−</button>
                    <span className="w-8 text-center font-semibold text-foreground">{travelers}</span>
                    <button onClick={() => setTravelers(Math.min(10, travelers + 1))} className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground hover:bg-muted">+</button>
                  </div>
                </div>
              </div>

              <div className="mb-4 rounded-lg bg-muted p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{formatPrice(tour.price)} × {travelers}</span>
                  <span className="font-semibold text-foreground">{formatPrice(total)}</span>
                </div>
                <div className="mt-2 flex justify-between border-t border-border pt-2 text-sm">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-lg font-bold text-primary">{formatPrice(total)}</span>
                </div>
              </div>

              {!showCheckout ? (
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full rounded-xl gradient-royal py-3.5 font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg"
                >
                  Reservar ahora
                </button>
              ) : (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                  <input placeholder="Nombre completo" className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground" />
                  <input placeholder="Email" type="email" className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground" />
                  <input placeholder="Teléfono / WhatsApp" className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground" />
                  <button className="w-full rounded-xl gradient-sunset py-3.5 font-semibold text-secondary-foreground transition-all hover:opacity-90">
                    Confirmar reserva
                  </button>
                  <button onClick={() => setShowCheckout(false)} className="w-full text-center text-sm text-muted-foreground hover:text-foreground">
                    Cancelar
                  </button>
                </motion.div>
              )}

              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block w-full rounded-xl border border-border py-3 text-center text-sm font-medium text-card-foreground transition-colors hover:bg-muted"
              >
                💬 Preguntar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TourDetail;
