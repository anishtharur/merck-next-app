export interface DrugCandidate {
  id: string;
  name: string;
  status: "In Development" | "Approved" | "Discontinued";
  description: string;
  mechanismOfAction: string;
  sideEffects: string[];
  developmentPhase: number;
  lastUpdated: string;
}

export type SearchParams = {
  query: string;
};
