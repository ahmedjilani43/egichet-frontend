import * as React from "react";
import { Card, CardContent } from "../ui/Card";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const CategoryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-col items-center gap-12">
      <section className="w-full max-w-7xl px-4">
        <h2 className="text-[34px] font-semibold uppercase text-[var(--color-primary)] text-center mb-12 font-poppins">
          Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <Card
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`aspect-square cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 
                  hover:shadow-lg hover:scale-105 
                  ${isActive ? "ring-4 ring-[var(--color-secondary)]" : ""}`}
              >
                <CardContent className="p-0 h-full relative">
                  <img
                    src={`/${category.toLowerCase()}.jpg`}
                    alt={category}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-[17px] font-semibold uppercase text-white font-poppins">
                      {category}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};
