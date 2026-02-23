export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hakuna. Todos los derechos reservados.
        </p>
        <div className="mt-4 md:mt-0">
          <a
            href="mailto:info@hakuna.com"
            className="text-white hover:underline mr-4"
          >
            info@hakuna.com
          </a>
          <a href="tel:+573001234567" className="text-white hover:underline">
            +57 300 1234567
          </a>
        </div>
      </div>
    </footer>
  );
}