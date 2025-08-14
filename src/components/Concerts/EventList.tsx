import * as React from "react";
import { Event } from "../ConcertsSection";
import { EventCard } from "./EventCard";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

interface EventListProps {
  filteredEvents: Event[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  onGetTickets: (event: Event) => void;
}

export const EventList = ({
  filteredEvents,
  searchTerm,
  setSearchTerm,
  setSelectedCategory,
  onGetTickets,
}: EventListProps) => {
  const [showAll, setShowAll] = React.useState(false);

  const eventsToShow = showAll ? filteredEvents : filteredEvents.slice(0, 3);

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsToShow.map((event) => (
          <EventCard key={event.id} event={event} onGetTickets={onGetTickets} />
        ))}
      </div>
      {filteredEvents.length > 3 && (
        <div className="text-center mt-6">
  <Button
    className="bg-secondary text-white px-8 py-4 rounded-full flex items-center gap-3 justify-center mx-auto text-lg font-medium min-w-[220px]"
    onClick={() => setShowAll((prev) => !prev)}
  >
    {showAll ? "Show Less" : "Voir Plus"} 
    <MoveRight className="w-5 h-5 flex-none" />
  </Button>
</div>

      )}
      {filteredEvents.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No events found</p>
        </div>
      )}
    </div>
  );
};