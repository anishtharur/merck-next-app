import { DrugCandidate } from "@/lib/types";
import DrugCard from "./DrugCard";

interface DrugListProps {
  drugs: DrugCandidate[];
  isSearching: boolean;
}

const DrugList = ({ drugs, isSearching }: DrugListProps) => {
  if (isSearching) {
    return (
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
    );
  }

  if (drugs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-4 mb-4">
          <svg
            className="w-6 h-6 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
          No results found
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Try adjusting your search criteria
        </p>
      </div>
    );
  }

  return (
    <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {drugs.map((drug, index) => (
        <DrugCard key={drug.id} drug={drug} index={index} />
      ))}
    </div>
  );
};

export default DrugList;
