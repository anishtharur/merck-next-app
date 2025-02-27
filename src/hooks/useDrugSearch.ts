import { useState, useEffect, useMemo } from "react";
import { fetchDrugCandidates } from "@/data/mockApi";
import { DrugCandidate } from "@/lib/types";

export function useDrugSearch(initialQuery: string = "") {
  const [query, setQuery] = useState<string>(initialQuery);
  const [isSearching, setIsSearching] = useState(false);
  const [drugCandidates, setDrugCandidates] = useState<DrugCandidate[]>([]);

  useEffect(() => {
    const loadDrugCandidates = async () => {
      const candidates = (await fetchDrugCandidates()) as DrugCandidate[];
      setDrugCandidates(candidates);
    };
    loadDrugCandidates();
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        setIsSearching(false);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  }, [query]);

  const searchResults = useMemo(() => {
    if (!query) {
      return drugCandidates;
    }

    const lowerCaseQuery = query.toLowerCase();
    return drugCandidates.filter(
      (drug) =>
        drug.name.toLowerCase().includes(lowerCaseQuery) ||
        drug.description.toLowerCase().includes(lowerCaseQuery)
    );
  }, [query, drugCandidates]);

  return {
    query,
    setQuery,
    isSearching,
    searchResults,
  };
}
