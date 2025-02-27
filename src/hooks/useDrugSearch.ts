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
    return drugCandidates.filter((drug) => {
      const phaseMatch = drug.developmentPhase
        .toString()
        .includes(lowerCaseQuery);
      const statusMatch = drug.status.toLowerCase().includes(lowerCaseQuery);
      const nameMatch = drug.name.toLowerCase().includes(lowerCaseQuery);
      const descriptionMatch = drug.description
        .toLowerCase()
        .includes(lowerCaseQuery);

      return nameMatch || descriptionMatch || statusMatch || phaseMatch;
    });
  }, [query, drugCandidates]);

  return {
    query,
    setQuery,
    isSearching,
    searchResults,
  };
}
