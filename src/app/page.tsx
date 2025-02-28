"use client";

import React from "react";
import SearchBar from "@/components/SearchBar";
import { useDrugSearch } from "@/hooks/useDrugSearch";
import { FilterIcon } from "lucide-react";
import dynamic from "next/dynamic";

const LazyDrugList = dynamic(() => import("@/components/DrugList"), {
  loading: () => (
    <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow-sm animate-pulse"
        >
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-3 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      ))}
    </div>
  ),
});

const Index = () => {
  const {
    query,
    setQuery,
    isSearching,
    searchResults,
    isInitialLoading,
    statusFilter,
    setStatusFilter,
    phaseFilter,
    setPhaseFilter,
  } = useDrugSearch();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div
        className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 transition-opacity duration-500 opacity-100`}
      >
        <div
          className="text-center max-w-3xl mx-auto mb-10 opacity-0 animate-fadeIn"
          style={{ animationDelay: "100ms" }}
        >
          <p className="text-sm font-medium text-pharma-500 dark:text-pharma-400 tracking-wider uppercase mb-3">
            Drug Candidate Management
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Merck Group Candidate
            <br />
            Database
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Explore our pipeline of innovative drug candidates at various stages
            of development.
          </p>
          <div>
            <div className="max-w-lg mx-auto">
              <SearchBar
                value={query}
                onChange={setQuery}
                isSearching={isSearching}
              />
            </div>
            <div className="flex justify-center items-center mt-4 space-x-2  md:space-x-4 font-semibold text-sm text-black dark:text-white">
              <FilterIcon />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pharma-500 font"
              >
                <option>All Statuses</option>
                <option>In Development</option>
                <option>Approved</option>
                <option>Discontinued</option>
              </select>
              <select
                value={phaseFilter}
                onChange={(e) => setPhaseFilter(e.target.value)}
                className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pharma-500"
              >
                <option value="All Phases">All Phases</option>
                <option value="1">Phase 1</option>
                <option value="2">Phase 2</option>
                <option value="3">Phase 3</option>
              </select>
            </div>
          </div>
        </div>

        <div
          className="opacity-0 animate-fadeIn"
          style={{ animationDelay: "300ms" }}
        >
          {isInitialLoading ? (
            <p className="italic text-center text-gray-600 dark:text-gray-300">
              Loading drug candidates...
            </p>
          ) : isSearching ? (
            <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow-sm animate-pulse"
                >
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-3 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              ))}
            </div>
          ) : searchResults.length === 0 && query ? (
            <p className="text-center text-gray-600 dark:text-gray-300">
              No results found for &quot;{query}&quot;.
            </p>
          ) : searchResults.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-300">
              No drug candidates available.
            </p>
          ) : (
            <LazyDrugList drugs={searchResults} isSearching={false} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
