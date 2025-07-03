import * as React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { MapPin, Calendar, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Event } from "../ConcertsSection";

interface EventCardProps {
  event: Event;
  onGetTickets: (event: Event) => void;
}

export const EventCard = ({ event, onGetTickets }: EventCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group border-0 bg-white/90 backdrop-blur-sm hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {event.isHot && (
          <Badge
            variant="secondary"
            className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium px-4 py-2 rounded-full border-0 flex items-center gap-2 shadow-lg animate-pulse"
          >
            <div className="w-2 h-2 bg-white rounded-full animate-ping" />
            Hot Event
          </Badge>
        )}
        {event.rating && (
          <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md rounded-full p-3 group-hover:bg-black/50 transition-colors">
            <div className="flex items-center gap-1.5 text-white text-sm font-medium">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{event.rating}</span>
            </div>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors">
            {event.category}
          </Badge>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-1">
          {event.title}
        </h3>
        <p className="text-gray-600 mb-4 font-medium">{event.artist}</p>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-600">
            <div className="p-1.5 bg-purple-100 rounded-lg">
              <Calendar className="w-4 h-4 text-purple-600" />
            </div>
            <span className="text-sm">
              {event.date} • {event.time}
            </span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <div className="p-1.5 bg-purple-100 rounded-lg">
              <MapPin className="w-4 h-4 text-purple-600" />
            </div>
            <span className="text-sm">
              {event.venue}, {event.location}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500">Starting from</span>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {event.price}
            </div>
          </div>
          <Button
            size="lg"
            className="bg-white/80 border border-gray-300 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200"
            onClick={() => onGetTickets(event)}
          >
            Get Tickets
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
