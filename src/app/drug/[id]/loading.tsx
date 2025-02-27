const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-200">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        <div className="h-6 w-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default Loading;
