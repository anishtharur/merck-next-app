import { useState, useEffect, useMemo } from "react";
import { fetchDrugCandidates } from "@/data/mockApi";
import { DrugCandidate } from "@/lib/types";

export function useDrugSearch(initialQuery: string = "") {
  const [query, setQuery] = useState<string>(initialQuery);
  const [isSearching, setIsSearching] = useState(false);
  const [drugCandidates, setDrugCandidates] = useState<DrugCandidate[]>([]);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [phaseFilter, setPhaseFilter] = useState("All Phases");

  // Load initial drug candidates
  useEffect(() => {
    const loadDrugCandidates = async () => {
      try {
        setIsInitialLoading(true);
        const candidates = (await fetchDrugCandidates()) as DrugCandidate[];
        setDrugCandidates(candidates);
      } catch (error) {
        console.error("Failed to fetch drug candidates:", error);
      } finally {
        setIsInitialLoading(false);
      }
    };
    loadDrugCandidates();
  }, []);

  // Handle search state
  useEffect(() => {
    let searchTimer: NodeJS.Timeout;

    if (query.trim().length > 0) {
      setIsSearching(true);
      // Only set a timeout if we have data to search through
      if (drugCandidates.length > 0) {
        searchTimer = setTimeout(() => {
          setIsSearching(false);
        }, 100); // Reduced from 100ms for better UX
      }
    } else {
      setIsSearching(false);
    }

    return () => {
      if (searchTimer) clearTimeout(searchTimer);
    };
  }, [query, drugCandidates.length]);

  // Filter results based on query
  const searchResults = useMemo(() => {
    if (
      !query.trim() &&
      statusFilter === "All Statuses" &&
      phaseFilter === "All Phases"
    ) {
      return drugCandidates;
    }

    const lowerCaseQuery = query.toLowerCase().trim();

    return drugCandidates.filter((drug) => {
      const phaseMatch =
        phaseFilter === "All Phases" ||
        drug.developmentPhase.toString() === phaseFilter;
      const statusMatch =
        statusFilter === "All Statuses" || drug.status === statusFilter;
      const nameMatch = drug.name.toLowerCase().includes(lowerCaseQuery);
      const descriptionMatch = drug.description
        .toLowerCase()
        .includes(lowerCaseQuery);

      return (nameMatch || descriptionMatch) && phaseMatch && statusMatch;
    });
  }, [query, drugCandidates, statusFilter, phaseFilter]);

  return {
    query,
    setQuery,
    isSearching,
    searchResults,
    isInitialLoading,
    statusFilter,
    setStatusFilter,
    phaseFilter,
    setPhaseFilter,
    // For debugging
    totalCandidates: drugCandidates.length,
  };
}
