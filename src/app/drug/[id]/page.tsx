"use client";
import { useEffect, useState } from "react";
import { drugCandidates } from "@/data/drugCandidates";
import { DrugCandidate } from "@/lib/types";
import StatusBadge from "@/components/StatusBadge";
import { ArrowLeft, Clock, Activity, AlertCircle, Info } from "lucide-react";

const DrugDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [drug, setDrug] = useState<DrugCandidate | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const foundDrug = drugCandidates.find((d) => d.id === id);
      setDrug(foundDrug || null);
      setIsLoading(false);
      setTimeout(() => {
        setIsLoaded(true);
      }, 100);
    }, 600);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-200">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-6 w-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  if (!drug) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4 transition-colors duration-200">
        <div className="text-center max-w-md">
          <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-full inline-flex mb-6">
            <AlertCircle className="h-6 w-6 text-red-500 dark:text-red-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Drug Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We couldn&apos;t find the drug candidate you&apos;re looking for. It
            may have been removed or the ID is incorrect.
          </p>
          <button
            onClick={() => window.history.back()} // Use window.history for navigation
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pharma-500 hover:bg-pharma-600 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => window.history.back()} // Use window.history for navigation
          className="inline-flex items-center text-sm font-medium text-pharma-500 dark:text-pharma-400 hover:text-pharma-700 dark:hover:text-pharma-300 mb-8 transition-colors group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to drug candidates
        </button>

        <div
          className={`transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 mb-8 opacity-0 animate-fadeIn"
                style={{ animationDelay: "100ms" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <StatusBadge status={drug.status} className="mb-3" />
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {drug.name}
                    </h1>
                    {drug.status === "In Development" && (
                      <p className="text-pharma-500 dark:text-pharma-400">
                        Phase {drug.developmentPhase} Clinical Trial
                      </p>
                    )}
                  </div>
                  <div className="mt-4 sm:mt-0 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-1 text-pharma-400 dark:text-pharma-300" />
                    <span>
                      Updated: {new Date(drug.lastUpdated).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Description
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {drug.description}
                  </p>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Mechanism of Action
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {drug.mechanismOfAction}
                  </p>
                </div>
              </div>

              <div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 opacity-0 animate-fadeIn"
                style={{ animationDelay: "200ms" }}
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-status-discontinued" />
                  Side Effects
                </h2>
                <ul className="space-y-3">
                  {drug.sideEffects.map((effect, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 bg-pharma-50 dark:bg-pharma-900/40 rounded-full flex items-center justify-center text-pharma-500 dark:text-pharma-300 mr-3 mt-0.5">
                        <svg
                          className="h-3 w-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {effect}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div
                className="bg-pharma-50 dark:bg-pharma-900/20 rounded-xl border border-pharma-100 dark:border-pharma-800/30 p-6 sticky top-8 opacity-0 animate-fadeIn"
                style={{ animationDelay: "300ms" }}
              >
                <h3 className="text-lg font-medium text-pharma-800 dark:text-pharma-300 mb-4 flex items-center">
                  <Info className="h-5 w-5 mr-2" />
                  Development Information
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-pharma-500 dark:text-pharma-400 mb-1">
                      Status
                    </h4>
                    <p className="text-gray-800 dark:text-gray-200">
                      {drug.status}
                    </p>
                  </div>

                  {drug.status === "In Development" && (
                    <div>
                      <h4 className="text-sm font-medium text-pharma-500 dark:text-pharma-400 mb-1">
                        Current Phase
                      </h4>
                      <div className="flex items-center">
                        <div className="w-full bg-pharma-100 dark:bg-pharma-800/50 rounded-full h-2.5 mr-2">
                          <div
                            className="bg-pharma-500 dark:bg-pharma-400 h-2.5 rounded-full"
                            style={{
                              width: `${(drug.developmentPhase / 4) * 100}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Phase {drug.developmentPhase}/4
                        </span>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-medium text-pharma-500 dark:text-pharma-400 mb-1">
                      Last Updated
                    </h4>
                    <p className="text-gray-800 dark:text-gray-200">
                      {new Date(drug.lastUpdated).toLocaleDateString()}
                    </p>
                  </div>

                  {drug.status === "Approved" && (
                    <div className="pt-2">
                      <div className="bg-status-approved/10 dark:bg-status-approved/5 border border-status-approved/20 dark:border-status-approved/10 rounded-lg p-4 flex items-start">
                        <Activity className="h-5 w-5 text-status-approved mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-status-approved mb-1">
                            FDA Approved
                          </h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            This drug has received regulatory approval and is
                            available for prescription.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {drug.status === "Discontinued" && (
                    <div className="pt-2">
                      <div className="bg-status-discontinued/10 dark:bg-status-discontinued/5 border border-status-discontinued/20 dark:border-status-discontinued/10 rounded-lg p-4 flex items-start">
                        <AlertCircle className="h-5 w-5 text-status-discontinued mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-status-discontinued mb-1">
                            Development Halted
                          </h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            This candidate is no longer under active development
                            due to safety or efficacy concerns.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugDetail;
