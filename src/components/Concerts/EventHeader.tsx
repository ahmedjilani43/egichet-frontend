import * as React from "react";
import { Sparkles } from "lucide-react";

export const EventHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
        <Sparkles className="w-6 h-6 text-purple-600" />
        <span className="text-sm font-semibold uppercase tracking-wider">Live Events</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
        Discover Amazing
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {" "}
          Events
        </span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Find and book tickets for the hottest concerts, festivals, and live performances in Tunisia
      </p>
    </div>
  );
};