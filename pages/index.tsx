import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { destinations } from '../data/destinations';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hakuna Agencia de Viajes</title>
        <meta
          name="description"
          content="Explora el mundo con Hakuna, tu agencia de viajes de confianza. Descubre destinos increíbles y vive experiencias únicas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Hero />
        <section id="destinos" className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Destinos destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </section>
        <section id="contacto" className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">
              Contáctanos
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}