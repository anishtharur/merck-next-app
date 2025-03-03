import { memo } from "react";

const Header = memo(() => (
  <div
    className="text-center max-w-3xl mx-auto mb-10 opacity-0 animate-fadeIn"
    style={{ animationDelay: "100ms" }}
  >
    <p className="text-sm font-medium text-pharma-500 dark:text-pharma-400 tracking-wider uppercase mb-3">
      Drug Candidate Management
    </p>
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
      Merck Group Candidate
      <br />
      Database
    </h1>
    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
      Explore our pipeline of innovative drug candidates at various stages of
      development.
    </p>
  </div>
));

Header.displayName = "Header";

export default Header;
