import { memo } from "react";

// Memoized loading skeleton component
const LoadingSkeleton = memo(() => (
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
));

LoadingSkeleton.displayName = "LoadingSkeleton";

export default LoadingSkeleton;
