import { DrugCandidate } from "@/lib/types";
import DrugCard from "./DrugCard";
import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { debounce } from "lodash";

interface DrugListProps {
  drugs: DrugCandidate[];
}

// Constants for virtualization
const CARD_HEIGHT = 250;
const WINDOW_HEIGHT = 900;
const OVERSCAN = 5; // Increased for smoother scrolling

const DrugList = ({ drugs }: DrugListProps) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const ticking = useRef(false);

  // Handle window resize for responsive grid
  useEffect(() => {
    const updateItemsPerRow = () => {
      if (window.innerWidth >= 1024) setItemsPerRow(3);
      else if (window.innerWidth >= 768) setItemsPerRow(2);
      else setItemsPerRow(1);
    };

    const debouncedResize = debounce(updateItemsPerRow, 100);
    updateItemsPerRow();
    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      debouncedResize.cancel();
    };
  }, []);

  // Memoized calculations for better performance
  const getVisibleRange = useCallback(() => {
    const rowHeight = CARD_HEIGHT + 24; // card height + gap
    const visibleRows = Math.ceil(WINDOW_HEIGHT / rowHeight);
    const startRow = Math.max(0, Math.floor(scrollTop / rowHeight) - OVERSCAN);
    const endRow = Math.min(
      Math.ceil(drugs.length / itemsPerRow),
      startRow + visibleRows + OVERSCAN
    );

    return {
      start: startRow * itemsPerRow,
      end: Math.min(endRow * itemsPerRow, drugs.length),
    };
  }, [scrollTop, drugs.length, itemsPerRow]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;

    if (!ticking.current) {
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrollTop(target.scrollTop);
        ticking.current = false;
      });
    }
  }, []);

  const { start, end } = getVisibleRange();
  const visibleDrugs = useMemo(
    () => drugs.slice(start, end),
    [drugs, start, end]
  );

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
    <div
      ref={containerRef}
      className="h-[400px] md:h-[450px] overflow-y-auto custom-scrollbar mt-10"
      onScroll={handleScroll}
    >
      <div
        className="relative w-full"
        style={{
          height: `${
            Math.ceil(drugs.length / itemsPerRow) * (CARD_HEIGHT + 24)
          }px`,
        }}
      >
        <div
          className="w-full px-4"
          style={{
            transform: `translateY(${
              Math.floor(start / itemsPerRow) * (CARD_HEIGHT + 24)
            }px)`,
            position: "relative",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleDrugs.map((drug) => (
              <div
                key={drug.id}
                className="relative transition-transform hover:-translate-y-1 hover:shadow-lg duration-200"
              >
                <DrugCard drug={drug} index={drugs.indexOf(drug)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugList;
