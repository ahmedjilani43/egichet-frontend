import * as React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

export const HeroSection = () => {
  return (
    <section className="relative h-[400px] sm:h-[500px] flex items-end justify-center bg-primary pb-10 sm:pb-16">
      <div className="absolute inset-0">
        <img
          src="/f1.png"
          alt="Concert background"
          className="object-cover w-full h-full opacity-80"
        />
      </div>

      <div className="relative z-10 text-center w-full px-4 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-[48px] font-semibold mb-3 sm:mb-4 uppercase text-white whitespace-nowrap">
          FIND YOUR NEXT EXPERIENCE
        </h1>

        <p className="text-base sm:text-lg md:text-[20px] mb-6 sm:mb-8 text-white whitespace-nowrap">
          Discover events happening near you
        </p>

        <div className="relative mx-auto w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary w-4 h-4 sm:w-5 sm:h-5" />
          <Input
            placeholder="Search for events"
            className="pl-8 sm:pl-10 pr-[100px] sm:pr-[110px] h-10 sm:h-12 bg-white text-primary rounded-lg border-0 text-sm sm:text-base"
          />
          <Button
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 sm:h-10 px-4 sm:px-6 bg-secondary hover:bg-secondary/90 text-white rounded-lg text-sm sm:text-base"
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};