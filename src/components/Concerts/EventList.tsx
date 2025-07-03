import * as React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { Event } from "../ConcertsSection";
import { EventCard } from "./EventCard";

interface EventListProps {
  filteredEvents: Event[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  onGetTickets: (event: Event) => void;
}

export const EventList = ({ filteredEvents, searchTerm, setSearchTerm, setSelectedCategory, onGetTickets }: EventListProps) => {
  return (
    <>
      {searchTerm && (
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Found <span className="font-semibold text-purple-600">{filteredEvents.length}</span> events
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onGetTickets={onGetTickets} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search terms or browse all categories</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="bg-white/80 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </>
  );
};