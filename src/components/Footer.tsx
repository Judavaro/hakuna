import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="gradient-royal text-primary-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/20">
              <span className="text-lg font-bold">H</span>
            </div>
            <span className="font-display text-2xl font-bold">Hakuna</span>
          </div>
          <p className="text-sm text-primary-foreground/70">
            Tu agencia de viajes de confianza para explorar Colombia y Latinoamérica sin preocupaciones.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg font-semibold">Destinos</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/catalogo?cat=playa" className="hover:text-primary-foreground transition-colors">Playas</Link></li>
            <li><Link to="/catalogo?cat=aventura" className="hover:text-primary-foreground transition-colors">Aventura</Link></li>
            <li><Link to="/catalogo?cat=cultura" className="hover:text-primary-foreground transition-colors">Cultura</Link></li>
            <li><Link to="/catalogo?cat=naturaleza" className="hover:text-primary-foreground transition-colors">Naturaleza</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg font-semibold">Empresa</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><span className="cursor-pointer hover:text-primary-foreground transition-colors">Sobre nosotros</span></li>
            <li><span className="cursor-pointer hover:text-primary-foreground transition-colors">Términos y condiciones</span></li>
            <li><span className="cursor-pointer hover:text-primary-foreground transition-colors">Política de privacidad</span></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg font-semibold">Contacto</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Bogotá, Colombia</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +57 300 123 4567</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@hakuna.co</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/50">
        © 2026 Hakuna. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
