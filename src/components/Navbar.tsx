import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/catalogo", label: "Destinos" },
  { to: "/catalogo?cat=paquete", label: "Paquetes" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isScrolled = typeof window !== "undefined" && window.scrollY > 50;

  return (
    <>
      {/* Top bar */}
      <div className="gradient-royal hidden md:block">
        <div className="container mx-auto flex items-center justify-between px-6 py-2 text-sm text-primary-foreground/90">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Bogotá, Colombia
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" /> +57 300 123 4567
            </span>
          </div>
          <span className="font-medium">✨ ¡Ofertas de temporada hasta 30% OFF!</span>
        </div>
      </div>

      <nav className="sticky top-0 z-50 border-b border-border/50 bg-card/95 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-royal">
              <span className="text-lg font-bold text-primary-foreground">H</span>
            </div>
            <span className="font-display text-2xl font-bold text-foreground">Hakuna</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/login"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-muted"
            >
              Entrar
            </Link>

            <Link
              to="/catalogo"
              className="rounded-lg gradient-royal px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg"
            >
              Reservar ahora
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border md:hidden"
            >
              <div className="flex flex-col gap-2 bg-card p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 rounded-lg border border-border px-5 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  Entrar
                </Link>

                <Link
                  to="/catalogo"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg gradient-royal px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
                >
                  Reservar ahora
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;