import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import SearchFilters from "@/components/SearchFilters";
import { tours } from "@/data/tours";

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "todos";
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCat);

  const filtered = useMemo(() => {
    return tours.filter((t) => {
      const matchCat = category === "todos" || t.category === category;
      const matchSearch =
        !search ||
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.location.toLowerCase().includes(search.toLowerCase()) ||
        t.country.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="gradient-royal py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold text-primary-foreground md:text-5xl"
          >
            Nuestros destinos
          </motion.h1>
          <p className="mt-3 text-primary-foreground/70">
            Encuentra tu próxima aventura entre nuestras experiencias seleccionadas
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <SearchFilters
            search={search}
            onSearchChange={setSearch}
            activeCategory={category}
            onCategoryChange={setCategory}
          />

          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">No encontramos destinos con esos criterios.</p>
              <button onClick={() => { setSearch(""); setCategory("todos"); }} className="mt-4 text-primary font-medium hover:underline">
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((tour, i) => (
                <TourCard key={tour.id} tour={tour} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;
