import * as React from "react";
import { Search, X } from "lucide-react";

interface EventSearchProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const EventSearch = ({ searchTerm, setSearchTerm }: EventSearchProps) => {
  const clearSearch = () => setSearchTerm("");

  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search events, artists, or locations..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-12 pr-12 py-4 text-lg border-0 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg shadow-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-xl focus:shadow-purple-500/20 transition-all duration-300 placeholder:text-gray-400"
      />
      {searchTerm && (
        <button
          onClick={clearSearch}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};
