import { DrugCandidate } from "@/lib/types";
import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { memo } from "react";

interface DrugCardProps {
  drug: DrugCandidate;
  index: number;
  style?: React.CSSProperties;
}

const UpdatedDate = memo(({ date }: { date: string }) => (
  <span className="inline-flex items-center">
    <svg
      className="mr-1.5 h-3 w-3 text-pharma-400 dark:text-pharma-300"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
    Updated: {new Date(date).toLocaleDateString("en-GB")}
  </span>
));

UpdatedDate.displayName = "UpdatedDate";

const PhaseIndicator = memo(({ phase }: { phase: number }) => (
  <span className="ml-4 inline-flex items-center">
    <svg
      className="mr-1.5 h-3 w-3 text-pharma-400 dark:text-pharma-300"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.414 5a1 1 0 111.414-1.414l-3 3a1 1 0 01-1.414 0l-3-3A1 1 0 0115 2z"
        clipRule="evenodd"
      />
    </svg>
    Phase {phase}
  </span>
));

PhaseIndicator.displayName = "PhaseIndicator";

const DrugCard = memo(({ drug, style }: DrugCardProps) => {
  return (
    <Link
      href={`/drug/${drug.id}`}
      className="block select-none"
      style={style}
      aria-label={`View details for ${drug.name}`}
      prefetch={false}
    >
      <div className="group relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full card-hover flex flex-col will-change-transform">
        <div className="flex justify-between items-start">
          <div>
            <StatusBadge status={drug.status} />
            <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-pharma-500 transition-colors duration-200">
              {drug.name}
            </h3>
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-pharma-50 dark:bg-pharma-900/40 p-1.5 rounded-full text-pharma-500 dark:text-pharma-300">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mt-3 flex-grow">
          {drug.description}
        </p>

        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-4 pt-2 border-t border-gray-100 dark:border-gray-700">
          <UpdatedDate date={drug.lastUpdated} />
          {drug.status === "In Development" && (
            <PhaseIndicator phase={drug.developmentPhase} />
          )}
        </div>
      </div>
    </Link>
  );
});

DrugCard.displayName = "DrugCard";

export default DrugCard;
