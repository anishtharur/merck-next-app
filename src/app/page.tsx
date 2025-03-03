"use client";

import React, { useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import { useDrugSearch } from "@/hooks/useDrugSearch";
import { FilterIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { memo } from "react";
import Header from "@/components/Header";
import LoadingSkeleton from "@/components/LoadingSkeleton";

// Lazy load DrugList with loading state
const LazyDrugList = dynamic(() => import("@/components/DrugList"), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});

// Memoized filter select component
const FilterSelect = memo(
  ({
    value,
    onChange,
    options,
    label,
  }: {
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    label: string;
  }) => (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pharma-500"
      aria-label={label}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
);

FilterSelect.displayName = "FilterSelect";

// Main component
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

  // Memoize filter options
  const statusOptions = useMemo(
    () => [
      { value: "All Statuses", label: "All Statuses" },
      { value: "In Development", label: "In Development" },
      { value: "Approved", label: "Approved" },
      { value: "Discontinued", label: "Discontinued" },
    ],
    []
  );

  const phaseOptions = useMemo(
    () => [
      { value: "All Phases", label: "All Phases" },
      { value: "1", label: "Phase 1" },
      { value: "2", label: "Phase 2" },
      { value: "3", label: "Phase 3" },
    ],
    []
  );

  // Memoize content based on loading and search states
  const content = useMemo(() => {
    if (isInitialLoading) {
      return (
        <p className="italic text-center text-gray-600 dark:text-gray-300">
          Loading drug candidates...
        </p>
      );
    }

    if (isSearching) {
      return <LoadingSkeleton />;
    }

    if (searchResults.length === 0 && query) {
      return (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No results found for &quot;{query}&quot;.
        </p>
      );
    }

    if (searchResults.length === 0) {
      return (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No drug candidates available.
        </p>
      );
    }
    return <LazyDrugList drugs={searchResults} />;
  }, [isInitialLoading, isSearching, searchResults, query]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 transition-opacity duration-500 opacity-100">
        <Header />

        <div className="max-w-lg mx-auto">
          <SearchBar
            value={query}
            onChange={setQuery}
            isSearching={isSearching}
          />
        </div>

        <div className="flex justify-center items-center mt-4 space-x-2 md:space-x-4 font-semibold text-sm text-black dark:text-white">
          <FilterIcon />
          <FilterSelect
            value={statusFilter}
            onChange={setStatusFilter}
            options={statusOptions}
            label="Filter by status"
          />
          <FilterSelect
            value={phaseFilter}
            onChange={setPhaseFilter}
            options={phaseOptions}
            label="Filter by phase"
          />
        </div>

        <div
          className="opacity-0 animate-fadeIn mt-10"
          style={{ animationDelay: "300ms" }}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default memo(Index);
