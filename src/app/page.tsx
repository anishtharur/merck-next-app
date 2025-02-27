"use client";
import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import DrugList from "@/components/DrugList";
import { useDrugSearch } from "@/hooks/useDrugSearch";

const Index = () => {
  const { query, setQuery, isSearching, searchResults } = useDrugSearch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div
        className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fadeIn"
          style={{ animationDelay: "100ms" }}
        >
          <p className="text-sm font-medium text-pharma-500 dark:text-pharma-400 tracking-wider uppercase mb-3">
            Drug Candidate Management
          </p>
          <h1 className="text-4xl font-serif md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Therapeutic Candidate
            <br />
            Database
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Explore our pipeline of innovative drug candidates at various stages
            of development.
          </p>
          <div className="max-w-lg mx-auto">
            <SearchBar
              value={query}
              onChange={setQuery}
              isSearching={isSearching}
            />
          </div>
        </div>

        <div
          className="mt-12 opacity-0 animate-fadeIn"
          style={{ animationDelay: "300ms" }}
        >
          <DrugList drugs={searchResults} isSearching={isSearching} />
        </div>
      </div>
    </div>
  );
};

export default Index;
