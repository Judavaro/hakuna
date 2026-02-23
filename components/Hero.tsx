import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-96 flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1770&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Vive la aventura con Hakuna
        </h1>
        <p className="text-lg sm:text-xl text-white mb-6">
          Descubre destinos increíbles y crea recuerdos inolvidables con nuestra agencia de viajes.
        </p>
        <Link
          href="#contacto"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded"
        >
          Planifica tu viaje
        </Link>
      </div>
    </section>
  );
}