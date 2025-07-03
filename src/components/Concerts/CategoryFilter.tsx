import * as React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedCategory === category
              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-105"
              : "bg-white/80 text-gray-600 hover:bg-white hover:text-purple-600 hover:shadow-md backdrop-blur-sm"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
