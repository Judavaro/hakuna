import { Search } from "lucide-react";
import { categories } from "@/data/tours";

interface SearchFiltersProps {
  search: string;
  onSearchChange: (val: string) => void;
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

const SearchFilters = ({ search, onSearchChange, activeCategory, onCategoryChange }: SearchFiltersProps) => (
  <div className="mb-10 space-y-6">
    <div className="relative mx-auto max-w-xl">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        placeholder="Buscar destinos, tours, experiencias..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-card py-3.5 pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>

    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
            activeCategory === cat.id
              ? "gradient-royal text-primary-foreground shadow-md"
              : "bg-card text-muted-foreground hover:bg-muted border border-border"
          }`}
        >
          {cat.icon} {cat.label}
        </button>
      ))}
    </div>
  </div>
);

export default SearchFilters;
