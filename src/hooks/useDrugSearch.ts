
import { useState, useEffect, useMemo } from 'react';
import { drugCandidates } from '@/data/drugCandidates';
import { DrugCandidate } from '@/lib/types';

export function useDrugSearch(initialQuery: string = "") {
  const [query, setQuery] = useState<string>(initialQuery);
  const [isSearching, setIsSearching] = useState(false);

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
    return drugCandidates.filter((drug) => 
      drug.name.toLowerCase().includes(lowerCaseQuery) || 
      drug.description.toLowerCase().includes(lowerCaseQuery)
    );
  }, [query]);

  return {
    query,
    setQuery,
    isSearching,
    searchResults,
  };
}
