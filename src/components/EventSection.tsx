import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Calendar } from "lucide-react";
import { Badge } from "./ui/badge";
import { allEvents } from "./eventData";

interface EventSectionProps {
  showAllByDefault?: boolean;
}

export const EventSection= ({ showAllByDefault = false }: EventSectionProps) =>  {
  const [showAll, setShowAll] = useState(showAllByDefault);
  const eventsToShow = showAll ? allEvents : allEvents.slice(0, 3);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
           {!showAllByDefault && (
            <Button
              variant="outline"
              className="bg-white/80"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show Less" : "View All"}
            </Button>
          )}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsToShow.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2 text-xs">
                  {event.category}
                </Badge>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{event.artist}</p>
                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {event.date} • {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>
                      {event.venue}, {event.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-purple-600">{event.price}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/80 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
