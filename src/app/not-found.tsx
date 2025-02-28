import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4 transition-colors duration-200">
      <div className="text-center max-w-md">
        <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-full inline-flex mb-6">
          <AlertCircle className="h-6 w-6 text-red-500 dark:text-red-400" />
        </div>
        <h1
          className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3"
          role="alert"
        >
          Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We couldn&apos;t find the page you&apos;re looking for.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pharma-500 hover:bg-pharma-600 transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
