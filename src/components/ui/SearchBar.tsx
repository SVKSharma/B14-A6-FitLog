'use client';

import { FaSearch, FaTimes } from 'react-icons/fa';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  placeholder?: string;
}

export const SearchBar = ({
  searchQuery,
  setSearchQuery,
  placeholder = 'Search by name or tag...',
}: SearchBarProps) => {
  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
        <FaSearch className="text-xs" />
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[#181a20] border border-gray-800/80 focus:border-[#a6e22e] text-white text-xs font-bold rounded-xl pl-9 pr-8 py-2.5 outline-none placeholder:text-gray-500 placeholder:font-medium transition-colors"
      />

      {/* Clear Button */}
      {searchQuery && (
        <button
          onClick={handleClear}
          aria-label="Clear search"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
        >
          <FaTimes className="text-xs" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;