import { useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  isSearching: boolean;
}

const SearchBar = ({ value, onChange, isSearching }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={cn(
        "relative flex items-center w-full transition-all duration-300 overflow-hidden",
        "bg-white dark:bg-gray-800 border rounded-lg shadow-sm",
        isFocused
          ? "border-pharma-400 dark:border-pharma-300 ring-2 ring-pharma-100 dark:ring-pharma-500/20"
          : "border-gray-200 dark:border-gray-700"
      )}
    >
      <div className="flex items-center justify-center pl-3 text-gray-400 dark:text-gray-500">
        <Search size={18} className={isSearching ? "animate-pulse" : ""} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search drug candidates..."
        className="w-full py-3 pl-2 pr-4 bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
