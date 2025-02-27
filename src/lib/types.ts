
export interface DrugCandidate {
  id: string;
  name: string;
  status: 'In Development' | 'Approved' | 'Discontinued';
  description: string;
  mechanismOfAction: string;
  sideEffects: string[];
  developmentPhase: number;
  lastUpdated: string;
}

export type SearchParams = {
  query: string;
};

// Add Next.js inspired types even though we're using Vite
export type Route = {
  params: { [key: string]: string };
  query: { [key: string]: string | string[] };
};
